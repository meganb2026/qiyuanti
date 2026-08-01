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
        text: "你刚结束一场精彩绝伦的表演，走到SD听到了好多汪汪汪汪汪，你选择：",
        optionA: "目光搜寻看看是不是哪里有真的小狗",
        optionB: "站在SD口向每个方向微笑招手示意",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    {
        id: 8,
        text: "现在天马上黑了，安新荣跟着你们出来崴了脚。你决定先背着她回连队。内心感受是：",
        optionA: "先保证大家的安全",
        optionB: "好麻烦",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    {
        id: 9,
        text: "屠岸贾杀了你儿子，现在你低头看着赵氏孤儿，你会：",
        optionA: "重拾理智，好好养他",
        optionB: "又爱又恨",
        type: "TF",
        valueA: "T",
        valueB: "F"
    },
    // J/P 计划/随性
    {
        id: 10,
        text: "徐江给了你陈书婷信息的纸条，你会：",
        optionA: "和小龙一起打探一下陈书婷的大概信息",
        optionB: "直接去陈书婷家亲眼看看她是什么样的",
        type: "JP",
        valueA: "J",
        valueB: "P"
    },
    {
        id: 11,
        text: "你看上了泡泡玛特家的一个丑娃娃，连抽几盒都没有抽到，你会",
        optionA: "端盒",
        optionB: "在店里看到其他娃娃也很丑，开心地抽别的款式",
        type: "JP",
        valueA: "J",
        valueB: "P"
    },
    {
        id: 12,
        text: "现在有一个新款鱼摊自动售卖机，它可以帮你自动规划鱼类售卖，但有可能做出奇怪的事情比如拿鱼砸你的头（不会砸客户的），你会：",
        optionA: "不买。因为喜欢稳定有序，讨厌突发意外",
        optionB: "试试新东西",
        type: "JP",
        valueA: "J",
        valueB: "P"
    }
];

// 结果映射
const results = {
    "ISFJ": "棋元的狗",
    "ESFJ": "棋元的狗",
    "ISFJ": "棋元的狗",
    "ESFJ": "棋元的狗",
    "INFP": "棋元的狗",
    "ISFP": "棋元的狗",
    "INFJ": "棋元的狗",
    "ENFJ": "棋元的狗",
    "INTJ": "棋元的狗",
    "INTP": "棋元的狗",
    "ENTJ": "棋元的狗",
    "ESTJ": "棋元的狗",
    "ENFP": "棋元的狗",
    "ENTP": "棋元的狗",
    "ISTP": "棋元的狗",
    "ISTJ": "棋元的狗"
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