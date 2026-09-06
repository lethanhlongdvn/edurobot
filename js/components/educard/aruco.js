/**
 * js/components/educard/aruco.js
 * Thư viện nhận diện thị giác máy tính ArUco Marker 4x4 (Pure JavaScript)
 * Tối ưu hóa cho EduCard - Quét thẻ trắc nghiệm thời gian thực
 */

export const ARUCO_4X4_50 = [
    [0xd2, 0x38], [0xb4, 0xd0], [0xb8, 0x74], [0x98, 0x88], [0x20, 0xb4],
    [0xd8, 0x84], [0x90, 0x14], [0xb4, 0x28], [0xb4, 0xb0], [0x68, 0x88],
    [0x58, 0x84], [0x24, 0xa4], [0x30, 0xb8], [0xb4, 0x48], [0x50, 0x90],
    [0x98, 0x34], [0xb0, 0x18], [0x64, 0x40], [0x44, 0x58], [0x14, 0x34],
    [0xb8, 0xb4], [0x20, 0x24], [0x68, 0x34], [0x84, 0x24], [0x30, 0x74],
    [0x70, 0x18], [0x50, 0xb8], [0x48, 0x70], [0x58, 0x40], [0x50, 0xb0],
    [0xb4, 0x64], [0x68, 0xb8], [0xb8, 0x84], [0xb8, 0x94], [0x48, 0x10],
    [0x70, 0x88], [0x64, 0x28], [0xa8, 0x68], [0x88, 0x64], [0xb0, 0x24],
    [0xb4, 0x84], [0x74, 0x44], [0x88, 0x70], [0x28, 0x24], [0x14, 0x98],
    [0x64, 0x18], [0x84, 0x34], [0x88, 0x84], [0x84, 0x88], [0x84, 0x24]
];

export const Aruco = {
    /**
     * Lấy ma trận 4x4 (0 hoặc 1) của mã ID tương ứng (0 -> 49)
     */
    getBits(id) {
        if (id < 0 || id >= ARUCO_4X4_50.length) return null;
        const [b0, b1] = ARUCO_4X4_50[id];
        const val = (b0 << 8) | b1;
        const matrix = [];
        for (let r = 0; r < 4; r++) {
            const row = [];
            for (let c = 0; c < 4; c++) {
                const shift = 15 - (r * 4 + c);
                row.push((val >> shift) & 1);
            }
            matrix.push(row);
        }
        return matrix;
    },

    /**
     * Sinh chuỗi SVG vector độ nét cao của mã ArUco (bao gồm viền đen 1-bit ngoài cùng, tổng cỡ 6x6)
     * Hướng mặc định (0 độ xoay): Đáp án A ở cạnh trên
     */
    generateSVG(id, size = 200) {
        const bits = this.getBits(id);
        if (!bits) return '';

        const cellSize = size / 6;
        let rects = '';

        // Nền viền đen toàn bộ 6x6
        rects += `<rect x="0" y="0" width="${size}" height="${size}" fill="#000000" />`;
        
        // Vẽ 4x4 ô bên trong
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                if (bits[r][c] === 1) {
                    const x = (c + 1) * cellSize;
                    const y = (r + 1) * cellSize;
                    rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#ffffff" />`;
                }
            }
        }

        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" shape-rendering="crispEdges">${rects}</svg>`;
    },

    /**
     * Xoay ma trận 4x4 theo chiều kim đồng hồ 90 độ
     */
    rotateMatrix(mat) {
        const res = [[], [], [], []];
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                res[c][3 - r] = mat[r][c];
            }
        }
        return res;
    },

    /**
     * So khớp ma trận 4x4 đã trích xuất với toàn bộ từ điển để tìm ID và góc xoay
     * Góc xoay:
     * 0 -> 'A' (hướng chuẩn, cạnh trên quay lên)
     * 1 -> 'B' (xoay 90 độ, cạnh phải quay lên)
     * 2 -> 'C' (xoay 180 độ, cạnh đáy quay lên)
     * 3 -> 'D' (xoay 270 độ, cạnh trái quay lên)
     */
    matchDictionary(extracted4x4) {
        let current = extracted4x4;
        for (let rot = 0; rot < 4; rot++) {
            // Chuyển current thành 16-bit val
            let val = 0;
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    val = (val << 1) | (current[r][c] & 1);
                }
            }

            for (let id = 0; id < ARUCO_4X4_50.length; id++) {
                const targetVal = (ARUCO_4X4_50[id][0] << 8) | ARUCO_4X4_50[id][1];
                if (val === targetVal) {
                    const answerMap = ['A', 'D', 'C', 'B']; // Ánh xạ góc xoay vật lý sang đáp án hướng lên
                    return { id, rotation: rot, answer: answerMap[rot] };
                }
            }
            current = this.rotateMatrix(current);
        }
        return null;
    },

    /**
     * Giải mã toàn diện khung hình ảnh trên Canvas
     */
    detect(canvas, ctx) {
        const width = canvas.width;
        const height = canvas.height;
        if (!width || !height) return [];

        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // 1. Chuyển ảnh xám Grayscale & nhị phân hóa cục bộ
        const gray = new Uint8Array(width * height);
        let sum = 0;
        for (let i = 0, j = 0; i < data.length; i += 4, j++) {
            const g = (data[i] * 77 + data[i + 1] * 150 + data[i + 2] * 29) >> 8;
            gray[j] = g;
            sum += g;
        }
        const meanThreshold = Math.min(180, Math.max(70, (sum / gray.length) * 0.9));

        const binary = new Uint8Array(width * height);
        for (let i = 0; i < gray.length; i++) {
            binary[i] = gray[i] < meanThreshold ? 1 : 0; // 1 là màu đen
        }

        // 2. Tìm các vùng liên thông đa giác 4 đỉnh
        const quads = this.findQuadrilaterals(binary, width, height);
        const detectedMarkers = [];

        for (const quad of quads) {
            // 3. Trích xuất mẫu 6x6 bên trong đa giác 4 đỉnh
            const grid6x6 = this.sampleGrid6x6(gray, quad, width, height);
            if (!grid6x6) continue;

            // Kiểm tra viền đen bên ngoài (Border Check)
            if (!this.isValidBorder(grid6x6)) continue;

            // Lấy 4x4 bên trong
            const inner4x4 = [];
            for (let r = 1; r <= 4; r++) {
                const row = [];
                for (let c = 1; c <= 4; c++) {
                    row.push(grid6x6[r][c]);
                }
                inner4x4.push(row);
            }

            const match = this.matchDictionary(inner4x4);
            if (match) {
                detectedMarkers.push({
                    id: match.id + 1, // STT 1..50
                    rawId: match.id,
                    answer: match.answer,
                    rotation: match.rotation,
                    corners: quad,
                    center: {
                        x: (quad[0].x + quad[1].x + quad[2].x + quad[3].x) / 4,
                        y: (quad[0].y + quad[1].y + quad[2].y + quad[3].y) / 4
                    }
                });
            }
        }

        return detectedMarkers;
    },

    findQuadrilaterals(binary, width, height) {
        const quads = [];
        const step = Math.max(2, Math.floor(width / 320));
        const visited = new Uint8Array(width * height);

        for (let y = 10; y < height - 10; y += step * 4) {
            for (let x = 10; x < width - 10; x += step * 4) {
                const idx = y * width + x;
                if (binary[idx] === 1 && !visited[idx]) {
                    const contour = this.traceContour(binary, visited, x, y, width, height);
                    if (contour.length >= 20 && contour.length <= 1500) {
                        const quad = this.approximateQuad(contour);
                        if (quad && this.isValidQuadShape(quad)) {
                            quads.push(quad);
                        }
                    }
                }
            }
        }
        return quads;
    },

    traceContour(binary, visited, startX, startY, width, height) {
        const contour = [];
        let cx = startX, cy = startY;
        const maxPts = 1200;
        let dir = 0;
        const dx = [1, 1, 0, -1, -1, -1, 0, 1];
        const dy = [0, 1, 1, 1, 0, -1, -1, -1];

        for (let count = 0; count < maxPts; count++) {
            contour.push({ x: cx, y: cy });
            visited[cy * width + cx] = 1;
            let found = false;

            for (let i = 0; i < 8; i++) {
                const ndir = (dir + i) % 8;
                const nx = cx + dx[ndir];
                const ny = cy + dy[ndir];

                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    if (binary[ny * width + nx] === 1) {
                        cx = nx;
                        cy = ny;
                        dir = (ndir + 5) % 8;
                        found = true;
                        break;
                    }
                }
            }

            if (!found || (Math.abs(cx - startX) <= 1 && Math.abs(cy - startY) <= 1 && count > 5)) {
                break;
            }
        }
        return contour;
    },

    approximateQuad(contour) {
        const peri = contour.length;
        if (peri < 20) return null;

        let minSum = contour[0], maxSum = contour[0], minDiff = contour[0], maxDiff = contour[0];

        for (const pt of contour) {
            const s = pt.x + pt.y;
            const d = pt.x - pt.y;
            if (s < minSum.x + minSum.y) minSum = pt;
            if (s > maxSum.x + maxSum.y) maxSum = pt;
            if (d < minDiff.x - minDiff.y) minDiff = pt;
            if (d > maxDiff.x - maxDiff.y) maxDiff = pt;
        }

        return [minSum, maxDiff, maxSum, minDiff];
    },

    isValidQuadShape(quad) {
        const a = quad[0], b = quad[1], c = quad[2], d = quad[3];
        const area = 0.5 * Math.abs(
            (a.x * b.y - b.x * a.y) + (b.x * c.y - c.x * b.y) + 
            (c.x * d.y - d.x * c.y) + (d.x * a.y - a.x * d.y)
        );
        return area > 400 && area < 400000;
    },

    sampleGrid6x6(gray, quad, width, height) {
        const grid = [];
        const [p0, p1, p2, p3] = quad;

        let sampleSum = 0;
        let sampleCount = 0;
        const samples = [];

        for (let r = 0; r < 6; r++) {
            const rowSamples = [];
            const v = (r + 0.5) / 6.0;
            for (let c = 0; c < 6; c++) {
                const u = (c + 0.5) / 6.0;

                const topX = p0.x + u * (p1.x - p0.x);
                const topY = p0.y + u * (p1.y - p0.y);
                const botX = p3.x + u * (p2.x - p3.x);
                const botY = p3.y + u * (p2.y - p3.y);

                const x = Math.round(topX + v * (botX - topX));
                const y = Math.round(topY + v * (botY - topY));

                if (x >= 0 && x < width && y >= 0 && y < height) {
                    const g = gray[y * width + x];
                    rowSamples.push(g);
                    sampleSum += g;
                    sampleCount++;
                } else {
                    return null;
                }
            }
            samples.push(rowSamples);
        }

        if (sampleCount !== 36) return null;
        const localThresh = sampleSum / 36;

        for (let r = 0; r < 6; r++) {
            const row = [];
            for (let c = 0; c < 6; c++) {
                row.push(samples[r][c] > localThresh ? 1 : 0);
            }
            grid.push(row);
        }

        return grid;
    },

    isValidBorder(grid6x6) {
        let blackCount = 0;
        for (let c = 0; c < 6; c++) {
            if (grid6x6[0][c] === 0) blackCount++;
            if (grid6x6[5][c] === 0) blackCount++;
        }
        for (let r = 1; r < 5; r++) {
            if (grid6x6[r][0] === 0) blackCount++;
            if (grid6x6[r][5] === 0) blackCount++;
        }
        return blackCount >= 16;
    }
};

window.Aruco = Aruco;
