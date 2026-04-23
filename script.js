// 测试题目数据
const questions = [
    // E/I 外向/内向
    {
        id: 1,
        text: "和朋友聚会结束后，你会？",
        optionA: "精力变足，还想继续玩",
        optionB: "很累，只想回家独处安静",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    {
        id: 2,
        text: "遇到陌生人，你通常？",
        optionA: "主动搭话、破冰聊天",
        optionB: "默默观察，等对方开口",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    {
        id: 3,
        text: "空闲无聊时，你更喜欢？",
        optionA: "找人出门、社交消遣",
        optionB: "自己发呆、胡思乱想、独处",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    // S/N 现实/直觉
    {
        id: 4,
        text: "思考事情时，你更偏向？",
        optionA: "眼前事实、细节、现实生活",
        optionB: "预感、脑洞、寓意、内心世界",
        type: "SN",
        valueA: "S",
        valueB: "N"
    },
    {
        id: 5,
        text: "理解东西时，你习惯？",
        optionA: "一步一步按道理来",
        optionB: "凭感觉、整体直觉、猜深层含义",
        type: "SN",
        valueA: "S",
        valueB: "N"
    },
    {
        id: 6,
        text: "看待世界，你觉得？",
        optionA: "世界就是实实在在的生活",
        optionB: "世界有看不见的情绪、命运、氛围",
        type: "SN",
        valueA: "S",
        valueB: "N"
    },
    // T/F 理智/感性
    {
        id: 7,
        text: "朋友难过伤心时，你第一反应？",
        optionA: "分析原因、讲道理解决问题",
        optionB: "先安慰情绪、心疼对方",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    {
        id: 8,
        text: "做重要决定，你靠？",
        optionA: "逻辑对错、利弊得失",
        optionB: "内心感受、舒不舒服、温柔与否",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    {
        id: 9,
        text: "待人处事你更？",
        optionA: "客观冷淡、就事论事",
        optionB: "心软包容、顾及别人感受",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    // J/P 计划/随性
    {
        id: 10,
        text: "出门 / 做事你习惯？",
        optionA: "提前规划、安排好一切",
        optionB: "临时决定、随心所欲、随缘",
        type: "JP",
        valueA: "J",
        valueB: "P"
    },
    {
        id: 11,
        text: "完成任务你？",
        optionA: "先做完再放松，讨厌拖延混乱",
        optionB: "拖延、随性、想到啥做啥",
        type: "JP",
        valueA: "J",
        valueB: "P"
    },
    {
        id: 12,
        text: "面对改变你？",
        optionA: "喜欢稳定有序，讨厌突发意外",
        optionB: "喜欢新鲜自由，讨厌被束缚",
        type: "JP",
        valueA: "J",
        valueB: "P"
    }
];

// 结果映射
const results = {
    "ISFJ": "正统男妈妈",
    "INFP": "温柔白女巫 / 易碎精灵",
    "INFJ": "暗黑预言女巫 / 高岭腹黑魔女",
    "INTJ": "黑魔法师 / 高冷幕后魔王",
    "ENFP": "快乐疯批小女巫",
    "ENTP": "阴阳怪气疯批恶魔",
    "ENTJ": "霸道总裁",
    "ISTP": "酷拽刺客"
};

// 全局变量
let currentQuestion = 0;
let answers = {};
let scores = {
    "E": 0, "I": 0,
    "S": 0, "N": 0,
    "T": 0, "F": 0,
    "J": 0, "P": 0
};

// DOM元素
const startPage = document.getElementById('start-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const progress = document.getElementById('progress');
const resultPersonality = document.getElementById('result-personality');
const resultTitle = document.getElementById('result-title');

// 初始化页面
function init() {
    // 绑定事件
    startBtn.addEventListener('click', startTest);
    restartBtn.addEventListener('click', restartTest);
    optionA.addEventListener('click', () => selectOption('A'));
    optionB.addEventListener('click', () => selectOption('B'));
}

// 开始测试
function startTest() {
    startPage.classList.remove('active');
    testPage.classList.add('active');
    currentQuestion = 0;
    answers = {};
    scores = {
        "E": 0, "I": 0,
        "S": 0, "N": 0,
        "T": 0, "F": 0,
        "J": 0, "P": 0
    };
    loadQuestion();
}

// 加载问题
function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionNumber.textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
        questionText.textContent = question.text;
        optionA.textContent = question.optionA;
        optionB.textContent = question.optionB;
        
        // 更新进度条
        const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
        progress.style.width = `${progressPercentage}%`;
    } else {
        showResult();
    }
}

// 选择选项
function selectOption(option) {
    const question = questions[currentQuestion];
    const selectedValue = option === 'A' ? question.valueA : question.valueB;
    answers[currentQuestion] = selectedValue;
    scores[selectedValue]++;
    
    currentQuestion++;
    loadQuestion();
}

// 计算结果
function calculateResult() {
    let personality = '';
    
    // E/I
    personality += scores['E'] > scores['I'] ? 'E' : 'I';
    
    // S/N
    personality += scores['S'] > scores['N'] ? 'S' : 'N';
    
    // T/F
    personality += scores['T'] > scores['F'] ? 'T' : 'F';
    
    // J/P
    personality += scores['J'] > scores['P'] ? 'J' : 'P';
    
    return personality;
}

// 显示结果
function showResult() {
    const personality = calculateResult();
    const title = results[personality] || "神秘人格";
    
    testPage.classList.remove('active');
    resultPage.classList.add('active');
    
    resultPersonality.textContent = personality;
    resultTitle.textContent = title;
}

// 重新测试
function restartTest() {
    resultPage.classList.remove('active');
    startPage.classList.add('active');
}

// 初始化
init();