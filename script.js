// 测试题目数据
const questions = [
    // E/I 外向/内向
    {
        id: 1,
        text: "赵家遭到了满门抄斩，公主把赵氏孤儿托付给了你。现在屠岸贾带着士兵在外面全城搜查，你会：",
        optionA: "寻找公孙杵臼、魏绛等人谋划",
        optionB: "独自隐忍谋划，深埋心事，依靠自我消化坚持",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    {
        id: 2,
        text: "你刚刚杀死哥哥篡位，现在是你和葛楚德的婚宴舞会。你听到贵族们窃窃私语你哥的死因，你会：",
        optionA: "主动搭话，看看他们知道多少",
        optionB: "当没看到刻意回避，以防不小心泄露了什么",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    {
        id: 3,
        text: "你把李木子关在海底了，接下来你会：",
        optionA: "警官，我老婆丢了",
        optionB: "一个人喝醉诶~诶~诶~诶~诶~诶~诶~",
        type: "EI",
        valueA: "E",
        valueB: "I"
    },
    // S/N 现实/直觉
    {
        id: 4,
        text: "面对新城建设，你首先考虑：",
        optionA: "妹妹是你心里永远的痛，下水道疏水是最重要的",
        optionB: "新城是一片广阔天地，学成归来你的有很多新思路都可以拿来学以致用",
        type: "SN",
        valueA: "S",
        valueB: "N"
    },
    {
        id: 5,
        text: "屠岸贾在你面前把你儿子剁成了三节，你闭上眼睛：",
        optionA: "眼前是宝宝刚出生的样子、宝宝在妈妈怀里的样子、地上的血渍",
        optionB: "脑海里是宝宝的哭声、公孙杵臼的嘱托和全城有男婴家庭东躲西藏的悲苦",
        type: "SN",
        valueA: "S",
        valueB: "N"
    },
    {
        id: 6,
        text: "安警官刚刚帮你解决了小龙小虎的威胁，现在小龙小虎又来旧厂街菜市场收摊位费时你会：",
        optionA: "给他们准备好等离纸电视",
        optionB: "看看他俩脸色，判断不敢做什么，直接给摊位费并招呼他们买鱼",
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
    "ISFJ": "吴智哲",
    "ESFJ": "吴智哲",
    "ISFJ": "薛承宇",
    "ESFJ": "薛承宇",
    "INFP": "王洛宾",
    "ISFP": "陈飞浦",
    "INFJ": "程婴",
    "ENFJ": "高启强",
    "INTJ": "宫洺",
    "INTP": "宫洺",
    "ENTJ": "克劳狄斯",
    "ESTJ": "克劳狄斯",
    "ENFP": "阴阳怪气疯批恶魔",
    "ENTP": "阴阳怪气疯批恶魔",
    "ISTP": "何非",
    "ISTJ": "李想"
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