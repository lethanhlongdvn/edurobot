export const lesson156 = {
    period: "156",
    title: "BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 1)",
    topic: "Ôn tập các phép tính",
    week: "32",

    content: `
        <div class="space-y-10">
            <!-- Bài 1: Tính -->
            <div class="bg-white p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">1</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 1. Tính</h3>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Câu a -->
                    <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-200 space-y-4">
                        <h4 class="font-bold text-blue-900 text-lg">a) Số tự nhiên</h4>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">536 817 + 82 579 =</p>
                            <input type="text" id="156-1-1" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-blue-500 text-xl text-center font-bold" placeholder="Kết quả">
                        </div>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">981 759 - 645 267 =</p>
                            <input type="text" id="156-1-2" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-blue-500 text-xl text-center font-bold" placeholder="Kết quả">
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 space-y-4">
                        <h4 class="font-bold text-emerald-900 text-lg">b) Số thập phân</h4>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">64,38 + 93,46 =</p>
                            <input type="text" id="156-1-3" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-emerald-500 text-xl text-center font-bold" placeholder="Kết quả">
                        </div>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">86,09 - 54,3 =</p>
                            <input type="text" id="156-1-4" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-emerald-500 text-xl text-center font-bold" placeholder="Kết quả">
                        </div>
                    </div>

                    <!-- Câu c -->
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200 space-y-4">
                        <h4 class="font-bold text-indigo-900 text-lg">c) Phân số (dạng a/b)</h4>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">4/7 + 3/5 =</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="156-1-5n" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Tử">
                                <span class="text-2xl font-bold">/</span>
                                <input type="text" id="156-1-5d" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Mẫu">
                            </div>
                        </div>
                        <div>
                            <p class="font-medium text-gray-700 mb-2">10/9 - 5/6 =</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="text" id="156-1-6n" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Tử">
                                <span class="text-2xl font-bold">/</span>
                                <input type="text" id="156-1-6d" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="Mẫu">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-156-1" onclick="window.check_156_1()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 2: Tìm số hoặc chữ thích hợp -->
            <div class="bg-white p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">2</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 2. Tìm số hoặc chữ thích hợp với dấu "?"</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Câu a -->
                    <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-200 space-y-4">
                        <h4 class="font-bold text-xl text-blue-900">a) Tính chất với số 0 và phép trừ</h4>
                        <div class="space-y-3 font-semibold text-lg text-gray-800">
                            <div class="flex items-center gap-2">
                                <span>a +</span>
                                <input type="text" id="156-2-1" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>= a =</span>
                                <input type="text" id="156-2-2" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>+ a</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>a -</span>
                                <input type="text" id="156-2-3" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>= a</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>a -</span>
                                <input type="text" id="156-2-4" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>= 0</span>
                            </div>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-purple-50/50 p-6 rounded-2xl border border-purple-200 space-y-4">
                        <h4 class="font-bold text-xl text-purple-900">b) Tính chất giao hoán và kết hợp</h4>
                        <div class="space-y-3 font-semibold text-lg text-gray-800">
                            <div class="flex items-center gap-2">
                                <span>a + b =</span>
                                <input type="text" id="156-2-5" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>+ a</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>(a + b) + c = a + (b +</span>
                                <input type="text" id="156-2-6" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>)</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span>(a + b) + c =</span>
                                <input type="text" id="156-2-7" class="w-16 px-2 py-1 border-2 border-gray-300 rounded-lg text-center font-bold" placeholder="?">
                                <span>+ (b + c)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-156-2" onclick="window.check_156_2()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 3: Tính bằng cách thuận tiện -->
            <div class="bg-white p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">3</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 3. Tính bằng cách thuận tiện</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 space-y-4">
                        <p class="font-bold text-xl text-emerald-900">a) 275 + (725 + 486)</p>
                        <input type="text" id="156-3-1" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-emerald-500 text-xl font-bold text-center" placeholder="Nhập kết quả">
                    </div>

                    <div class="bg-teal-50/50 p-6 rounded-2xl border border-teal-200 space-y-4">
                        <p class="font-bold text-xl text-teal-900">b) (3,29 + 4,63) + 5,37</p>
                        <input type="text" id="156-3-2" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-teal-500 text-xl font-bold text-center" placeholder="Nhập kết quả">
                    </div>

                    <div class="bg-sky-50/50 p-6 rounded-2xl border border-sky-200 space-y-4">
                        <p class="font-bold text-xl text-sky-900">c) 63,4 + 597 + 36,6</p>
                        <input type="text" id="156-3-3" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-sky-500 text-xl font-bold text-center" placeholder="Nhập kết quả">
                    </div>

                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200 space-y-4">
                        <p class="font-bold text-xl text-indigo-900">d) 4/9 + 7/12 + 5/12 + 5/9</p>
                        <input type="text" id="156-3-4" class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-indigo-500 text-xl font-bold text-center" placeholder="Nhập kết quả (VD: 2)">
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-156-3" onclick="window.check_156_3()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>

            <!-- Bài 4: Bài toán cây gậy của Rô-bốt -->
            <div class="bg-white p-8 rounded-[2rem] border-4 border-gray-100 shadow-xl space-y-6">
                <div class="flex items-center gap-3 border-b-2 border-gray-100 pb-4">
                    <span class="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-xl">4</span>
                    <h3 class="text-2xl font-black text-gray-800">Bài 4. Giải bài toán</h3>
                </div>

                <div class="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 space-y-4">
                    <p class="text-xl font-medium text-gray-800 leading-relaxed">
                        Rô-bốt nối hai cây gậy ngắn, mỗi cây gậy dài <span class="font-bold text-blue-700">0,8 m</span> thành cây gậy dài AB. Cho biết chỗ nối là đoạn MN dài <span class="font-bold text-blue-700">0,15 m</span> (như hình vẽ trong SGK). Hỏi cây gậy AB dài bao nhiêu mét?
                    </p>
                    
                    <div class="flex flex-col md:flex-row items-center gap-4 pt-4 border-t border-amber-200">
                        <span class="font-bold text-xl text-gray-700">Đáp số:</span>
                        <input type="text" id="156-4-ans" class="w-64 px-4 py-2 rounded-xl border-2 border-gray-300 focus:border-blue-500 text-xl font-bold text-center" placeholder="Nhập số (m)">
                        <span class="font-bold text-xl text-gray-600">m</span>
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button id="btn-check-156-4" onclick="window.check_156_4()" class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                </div>
            </div>
        </div>
    `,

    quiz: [
        {
            question: "Tính: 35,4 + 14,6 =",
            options: ["50", "49", "50,4", "49,5"],
            answer: 0
        },
        {
            question: "Tính: 100 - 45,8 =",
            options: ["54,2", "55,2", "54,8", "64,2"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 3/4 + 1/2 là:",
            options: ["5/4", "4/6", "1", "3/8"],
            answer: 0
        },
        {
            question: "Tìm x biết: x - 12,5 = 27,5",
            options: ["40", "15", "39,5", "40,5"],
            answer: 0
        },
        {
            question: "Tính nhanh: 15,7 + 28,4 + 4,3 =",
            options: ["48,4", "47,4", "48", "49,4"],
            answer: 0
        },
        {
            question: "Số thích hợp điền vào chỗ chấm: 5,6 + ... = 10",
            options: ["4,4", "4,6", "5,4", "3,4"],
            answer: 0
        },
        {
            question: "Một mảnh đất hình chữ nhật có chiều dài 25,5m, chiều rộng ngắn hơn chiều dài 8,2m. Chiều rộng mảnh đất là:",
            options: ["17,3m", "17,5m", "33,7m", "16,3m"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 1 - 3/7 là:",
            options: ["4/7", "3/7", "2/7", "5/7"],
            answer: 0
        },
        {
            question: "Giá trị của biểu thức 100 - (25,5 + 34,5) là:",
            options: ["40", "50", "60", "30"],
            answer: 0
        },
        {
            question: "Tính: 12,35 + 45,65 =",
            options: ["58", "57", "58,1", "57,9"],
            answer: 0
        },
        {
            question: "Hiệu của số lớn nhất có 3 chữ số và số nhỏ nhất có 3 chữ số khác nhau là:",
            options: ["897", "899", "898", "900"],
            answer: 0
        },
        {
            question: "Kết quả của phép tính 5/8 - 1/4 là:",
            options: ["3/8", "4/4", "1/2", "3/4"],
            answer: 0
        },
        {
            question: "Số hạng thứ hai là bao nhiêu biết tổng là 85,6 và số hạng thứ nhất là 28,4?",
            options: ["57,2", "57,4", "114", "56,2"],
            answer: 0
        },
        {
            question: "Tính: 0,75 + 1,25 + 2,5 =",
            options: ["4,5", "4", "5", "3,5"],
            answer: 0
        },
        {
            question: "Một cửa hàng ngày thứ nhất bán được 120,5 kg gạo, ngày thứ hai bán được nhiều hơn ngày thứ nhất 15,5 kg. Cả hai ngày bán được:",
            options: ["256.5 kg", "256.5 kg", "136 kg", "241 kg"],
            answer: 0
        }
    ]
};

// Đăng ký global
window.lesson156 = lesson156;

// Tải logic kiểm tra
import './logic.js';

