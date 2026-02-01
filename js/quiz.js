const quizData = [
    {
        chapterId: 0,
        chapterTitle: "📘 مقدمة الكتاب",
        questions: [
            {
                id: 1,
                text: "شنو هو الهدف الأساسي من هاد الكتاب؟",
                options: [
                    "تعلم البرمجة بالزربة",
                    "تفهم كيفاش كيخدم الكمبيوتر من الداخل (تحت الغطاء)",
                    "تعلم كيفاش تصلح البيسي إلى خسر",
                    "تفهم غير الذكاء الاصطناعي بوحدو"
                ],
                answer: 1, // الفهرس 1 (الثاني في المصفوفة)
                explanation: "الهدف هو تفهم كيفاش الكمبيوتر كيخدم بلا تعقيد، وتعرف شنو كيوقع لداخل قبل ما تبدا تعلم البرمجة."
            },
            {
                id: 2,
                text: "فشنو كيختلف الكمبيوتر على الإنسان حسب المقدمة؟",
                options: [
                    "الكمبيوتر عندو عقل كيفكر بحال بنادم",
                    "الكمبيوتر كيحس وعندو وعي",
                    "الكمبيوتر كيطبق الأوامر بدقة وسرعة خيالية وصافي",
                    "الكمبيوتر كياخد قرارات على حساب المشاعر ديالو"
                ],
                answer: 2,
                explanation: "الكمبيوتر ما كيعقلش وما كيحسش. هو غير آلة كطبق داكشي اللي كتقول ليها بدقة وسرعة."
            }
        ]
    },
    {
        chapterId: 1,
        chapterTitle: "📖 الفصل الأول: شنو هو الكمبيوتر فعلاً؟",
        questions: [
            {
                id: 3,
                text: "شنو هما الحالتين الوحيدتين اللي كيفهمهم الكمبيوتر؟",
                options: [
                    "صح وخطأ",
                    "شاعل وطافي (1 و 0)",
                    "سريع وبطيء",
                    "كبير وصغير"
                ],
                answer: 1,
                explanation: "الكمبيوتر كيعرف غير جوج حالات: الضوء دايز (1) ولا ما دايزش (0). هادشي هو الأساس ديال كلشي."
            },
            {
                id: 4,
                text: "شنو هما الترانزيستورات؟",
                options: [
                    "بلايص فين كنخزنو المعلومات",
                    "ساروت (مفتاح) صغير كيتحل ويتسد بالضوء",
                    "شاشات صغار",
                    "برامج ديال الويندوز"
                ],
                answer: 1,
                explanation: "الترانزيستور هو بحال شي ساروت (مفتاح) صغير بزاف، كيتحكم فسريان الضوء: يا كيدوزو (1) يا كيقطعو (0)."
            },
            {
                id: 5,
                text: "شنو الحاجة اللي الكمبيوتر ما كيعرفهاش؟",
                options: [
                    "0 و 1",
                    "الحروف، التصاور، والأصوات كيفما كنشوفوهم حنا",
                    "الأوامر البسيطة",
                    "الكهرباء"
                ],
                answer: 1,
                explanation: "الكمبيوتر ما كيشوفش التصاور ولا كيسمع الصوت بحالنا. هادشي كامل كيوصلو على شكل أرقام (0 و 1)."
            }
        ]
    },
    {
        chapterId: 2,
        chapterTitle: "📖 الفصل الثاني: كيفاش 0 و 1 ولات أرقام؟",
        questions: [
            {
                id: 6,
                text: "شنو هو النظام الثنائي (Binary)؟",
                options: [
                    "نظام الحساب العادي بـ 10 أرقام (0-9)",
                    "نظام الحساب بـ 2 أرقام فقط (0 و 1)",
                    "لغة برمجة قديمة",
                    "نظام ديال التشفير"
                ],
                answer: 1,
                explanation: "النظام الثنائي (Binary) هو اللغة ديال الكمبيوتر، وفيه غير جوج أرقام: 0 و 1."
            },
            {
                id: 7,
                text: "كيفاش كنحولو الرقم 5 للباينري (Binary)؟",
                options: [
                    "101",
                    "110",
                    "0101",
                    "111"
                ],
                answer: 0,
                explanation: "كنقسمو على 2: 5÷2=2 والباقي 1. 2÷2=1 والباقي 0. 1÷2=0 والباقي 1. كنقراو البواقي من اللخر للأول: 101."
            },
            {
                id: 8,
                text: "كيفاش دغيا تعرف واش العدد زوجي ولا فردي فالباينري؟",
                options: [
                    "الأعداد الزوجية كتسالي بـ 0 والفردية بـ 1",
                    "الأعداد الكبيرة كتسالي بـ 0",
                    "ما كايناش قاعدة",
                    "الأعداد الفردية كتسالي بـ 0"
                ],
                answer: 0,
                explanation: "فالباينري، ديما الأعداد الزوجية (اللي كتقسم على 2) كتسالي بـ 0، والأعداد الفردية (اللي كيبقى فيها 1) كتسالي بـ 1."
            }
        ]
    },
    {
        chapterId: 3,
        chapterTitle: "📖 الفصل الثالث: كيفاش الحروف ولات 0 و1؟",
        questions: [
            {
                id: 9,
                text: "كيفاش الكمبيوتر كيعقل على الحروف بحال A ولا B؟",
                options: [
                    "كيصورهم وكيعقل عليهم",
                    "كيسجل الصوت ديالهم",
                    "كيعطيهم أرقام، وكيرد الأرقام لـ 0 و 1",
                    "كيرسمهم فالذاكرة"
                ],
                answer: 2,
                explanation: "كل حرف عندو رقم خاص بيه (Code)، مثلا A هو 65. والكمبيوتر كيحول هاد 65 لـ 0 و 1."
            },
            {
                id: 10,
                text: "شنو هو ASCII؟",
                options: [
                    "ماركة ديال البيسيات",
                    "جدول كيعطي لكل حرف رقم خاص بيه",
                    "لغة برمجة",
                    "نوع ديال الويفي"
                ],
                answer: 1,
                explanation: "ASCII هو واحد الجدول عالمي، اتفقو فيه يعطيو لكل حرف ورمز رقم محدد باش الكمبيوتر يفهمو."
            },
            {
                id: 11,
                text: "علاش 'A' كبيرة و 'a' صغيرة ماشي بحال بحال عند الكمبيوتر؟",
                options: [
                    "حيت الكمبيوتر كيشوف الفرق فالحجم",
                    "حيت كل وحدة عندها رقم مختلف فجدول ASCII",
                    "حيت A كبيرة مهمة كتر",
                    "غير صدفة وصافي"
                ],
                answer: 1,
                explanation: "'A' عندها رقم (65) و 'a' عندها رقم مختلف (97)، داكشي علاش الكمبيوتر كيفرق بيناتهم."
            }
        ]
    },
    {
        chapterId: 4,
        chapterTitle: "📖 الفصل الرابع: شنو هو المعالج؟",
        questions: [
            {
                id: 12,
                text: "شنو هي الخدمة الرئيسية ديال المعالج (CPU)؟",
                options: [
                    "يخزن التصاور",
                    "يطلق الموسيقى",
                    "يقرا الأوامر وينفذها بالزربة",
                    "يبرد الجهاز"
                ],
                answer: 2,
                explanation: "المعالج هو 'الدماغ' (واخا ما كيعقلش) اللي كيجيب الأوامر وينفذها وحدة مورا وحدة بسرعة خيالية."
            },
            {
                id: 13,
                text: "شنو كيدير المعالج باش يخدم أي أمر؟",
                options: [
                    "كيشعل ويطفى",
                    "كيجيب الأمر، كيفهمو، وكينفذه (Fetch-Decode-Execute)",
                    "كيكتب ويمسح",
                    "كيصيفط الأمر للشاشة نيشان"
                ],
                answer: 1,
                explanation: "المعالج كيدير دورة كتعاود ديما: جيب الأمر (Fetch)، فك الرمز ديالو (Decode)، نفذه (Execute)."
            },
            {
                id: 14,
                text: "شنو هي ALU اللي وسط المعالج؟",
                options: [
                    "الذاكرة ديالو",
                    "الوحدة اللي كتدير الحساب (جمع، طرح..) والمنطق (مقارنة)",
                    "البطارية",
                    "المروحة"
                ],
                answer: 1,
                explanation: "ALU (Arithmetic Logic Unit) هي البلاصة فين كيوقع الحساب بصح: الزائد، الناقص، واش هادا كبر من هادا، إلخ."
            }
        ]
    },
    {
        chapterId: 5,
        chapterTitle: "📖 الفصل الخامس: الذاكرة - فين كيتخزّن كلشي؟",
        questions: [
            {
                id: 15,
                text: "شنو الفرق بين RAM والقرص الصلب (Disque Dur)؟",
                options: [
                    "RAM تقيلة والقرص خفيف",
                    "RAM كتحتفظ بالمعلومات واخا يطفى البيسي",
                    "RAM سريعة ولكن كتخوى ملي كيطفى الضوء، والقرص الصلب ثقيل شوية ولكن كيحفظ الداتا ديما",
                    "بحال بحال غير السمية مبدلة"
                ],
                answer: 2,
                explanation: "الرام (RAM) هي الطابلة فين خدام المعالج دابا (سريعة ومؤقتة)، والقرص الصلب هو الماريو فين مخبي كلشي (ثقيل ودائم)."
            },
            {
                id: 16,
                text: "كيفاش منظمة الذاكرة؟",
                options: [
                    "مخلطة ومروّنة",
                    "مقسمة لمربعات (Cases)، كل وحدة عندها عنوان ومحتوى",
                    "شريط طويل",
                    "دوائر عشوائية"
                ],
                answer: 1,
                explanation: "الذاكرة بحال شي صناديق ديال البريد، كل صندوق عندو نمرة (العنوان) وشنو وسطو (المحتوى 0 و 1)."
            }
        ]
    },
    {
        chapterId: 6,
        chapterTitle: "📖 الفصل السادس: كيفاش الصورة، الصوت، والفيديو ولات 0 و1؟",
        questions: [
            {
                id: 17,
                text: "شنو هما البيكسلز (Pixels)؟",
                options: [
                    "برنامج ديال التصاور",
                    "مربعات صغار بزاف كيتجمعو باش يعطيونا صورة",
                    "ملفات صوتية",
                    "نوع ديال الشاشات"
                ],
                answer: 1,
                explanation: "أي صورة رقمية مكونة من ملايين النقط الصغار سميتهم Pixels، كل بيكسل عندو لون."
            },
            {
                id: 18,
                text: "كيفاش الكمبيوتر كيعرف اللون ديال كل Pixel؟",
                options: [
                    "بالسمية (أحمر، خضر..)",
                    "بأرقام (شحال ديال الأحمر، الأخضر، والأزرق - RGB)",
                    "بالشكل",
                    "ما كيعرفش الألوان"
                ],
                answer: 1,
                explanation: "كل لون كيتكون من 3 د الأرقام: شحال فيه د الأحمر (R)، شحال د الأخضر (G)، وشحال د الأزرق (B)."
            }
        ]
    },
    {
        chapterId: 7,
        chapterTitle: "📖 الفصل السابع: شنو هو البرنامج؟ وكيفاش الكمبيوتر 'كيخدم'؟",
        questions: [
            {
                id: 19,
                text: "شنو هو البرنامج (Logiciel/Software) باختصار؟",
                options: [
                    "هو البيسي براسو",
                    "سلسلة ديال الأوامر والتعليمات مكتوبة باش يتبعها الكمبيوتر",
                    "هو الويفي",
                    "هو الويندوز فقط"
                ],
                answer: 1,
                explanation: "البرنامج هو الورقة اللي مكتوب فيها شنو خاص الكمبيوتر يدير، خطوة بخطوة."
            },
            {
                id: 20,
                text: "ملي كيوقع شي Plantage (خطأ)، واش الكمبيوتر اللي غلط؟",
                options: [
                    "اه، الكمبيوتر كيعيا",
                    "لا، الكمبيوتر غير كينفذ. الغلط كيكون فالبرنامج (الأوامر) اللي تعطات ليه",
                    "الكمبيوتر كيتقلق",
                    "الضوء هو السبب"
                ],
                answer: 1,
                explanation: "الكمبيوتر كيطبق داكشي اللي تقال ليه بالحرف. إلى كانت الأوامر غالطة، النتيجة غاتكون غالطة."
            }
        ]
    },
    {
        chapterId: 8,
        chapterTitle: "📖 الفصل الثامن: واش الكمبيوتر كيعقّل؟ وشنو هو الذكاء الاصطناعي فالحقيقة؟",
        questions: [
            {
                id: 21,
                text: "واش الكمبيوتر كيفكر بصح؟",
                options: [
                    "اه، كيفكر وعندو مشاعر",
                    "اه، ولكن غير فاش كيكون جديد",
                    "لا، ما كيفكرش. غير كيحسب وينفذ القواعد بسرعة",
                    "كاينين شي بيسيات كيفكرو"
                ],
                answer: 2,
                explanation: "الكمبيوتر (وحتى الذكاء الاصطناعي) ما عندوش وعي. هو غير آلة حاسبة متطورة وسريعة بزاف."
            },
            {
                id: 22,
                text: "شنو هو الذكاء الاصطناعي فالحقيقة؟",
                options: [
                    "سحر",
                    "برنامج معقد كيعتمد على الاحتمالات والرياضيات باش يعطي نتائج كتشبه الذكاء",
                    "روبوت عايش",
                    "كائن فضائي"
                ],
                answer: 1,
                explanation: "الذكاء الاصطناعي هو \"كود\" وبرامج كتحلل البيانات وكتعطي احتمالات. ما كاين لا فهم لا إحساس، كاين غير 'Maths'."
            }
        ]
    }
];

// حالة الكويز
let userAnswers = {}; // تخزين إجابات المستخدم {questionId: selectedOptionIndex}
let checkedAnswers = {}; // تخزين حالة التصحيح {questionId: true/false}
let totalQuestions = 0;

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function () {
    initializeQuiz();
    setupEventListeners();
});

// تهيئة الكويز
function initializeQuiz() {
    // حساب إجمالي الأسئلة
    totalQuestions = quizData.reduce((total, chapter) => total + chapter.questions.length, 0);

    // تحديث الإحصائيات
    updateStats();

    // عرض أسئلة الكويز
    renderQuiz();

    // تطبيق الوضع الليلي إذا كان محفوظًا
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        updateThemeToggle();
    }

    // تحميل الإجابات المحفوظة
    loadSavedAnswers();
}

// تحديث الإحصائيات
function updateStats() {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.values(checkedAnswers).filter(val => val === true).length;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('answeredQuestions').textContent = answeredQuestions;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('scorePercentage').textContent = `${scorePercentage}%`;
}

// عرض الكويز
function renderQuiz() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';

    quizData.forEach(chapter => {
        // إنشاء قسم الفصل
        const chapterSection = document.createElement('div');
        chapterSection.className = 'quiz-container';

        // عنوان الفصل
        const chapterHeader = document.createElement('div');
        chapterHeader.className = 'chapter-header';

        const chapterTitle = document.createElement('div');
        chapterTitle.className = 'chapter-title';
        chapterTitle.innerHTML = `<i class="fas fa-book chapter-icon"></i> ${chapter.chapterTitle}`;

        const questionCount = document.createElement('div');
        questionCount.className = 'question-count';
        questionCount.textContent = `${chapter.questions.length} سؤال`;

        chapterHeader.appendChild(chapterTitle);
        chapterHeader.appendChild(questionCount);

        // قائمة الأسئلة
        const questionList = document.createElement('div');
        questionList.className = 'question-list';

        chapter.questions.forEach((question, qIndex) => {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item';
            questionItem.id = `question-${question.id}`;

            // حالة التصحيح
            const isChecked = checkedAnswers[question.id] !== undefined;
            const isCorrect = checkedAnswers[question.id] === true;

            if (isChecked) {
                questionItem.classList.add(isCorrect ? 'correct' : 'wrong');
            }

            // مؤشر حالة السؤال
            if (isChecked) {
                const statusIcon = document.createElement('div');
                statusIcon.className = `question-status ${isCorrect ? 'correct' : 'wrong'}`;
                statusIcon.innerHTML = isCorrect ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>';
                questionItem.appendChild(statusIcon);
            }

            // نص السؤال
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.innerHTML = `<span class="question-number">${question.id}</span> ${question.text}`;

            // قائمة الخيارات
            const optionsList = document.createElement('ul');
            optionsList.className = 'options-list';

            const optionLetters = ['أ', 'ب', 'ج', 'د'];
            const userAnswer = userAnswers[question.id];

            question.options.forEach((option, oIndex) => {
                const optionItem = document.createElement('li');
                optionItem.className = 'option-item';
                optionItem.dataset.optionIndex = oIndex;
                optionItem.dataset.questionId = question.id;

                // تحديد إذا كان هذا الخيار هو إجابة المستخدم
                if (userAnswer === oIndex) {
                    optionItem.classList.add('selected');
                }

                // تحديد إذا كان هذا الخيار صحيح/خطأ بعد التصحيح
                if (isChecked) {
                    if (oIndex === question.answer) {
                        optionItem.classList.add('correct');
                    } else if (userAnswer === oIndex && oIndex !== question.answer) {
                        optionItem.classList.add('wrong');
                    }
                }

                // إضافة أيقونة التغذية الراجعة
                let feedbackIcon = '';
                if (isChecked) {
                    if (oIndex === question.answer) {
                        feedbackIcon = '<i class="fas fa-check correct-icon option-feedback"></i>';
                    } else if (userAnswer === oIndex && oIndex !== question.answer) {
                        feedbackIcon = '<i class="fas fa-times wrong-icon option-feedback"></i>';
                    }
                }

                optionItem.innerHTML = `
                            ${feedbackIcon}
                            <span class="option-letter">${optionLetters[oIndex]}</span>
                            ${option}
                        `;

                // إضافة حدث النقر على الخيار
                optionItem.addEventListener('click', () => {
                    selectAnswer(question.id, oIndex, optionItem);
                });

                optionsList.appendChild(optionItem);
            });

            // قسم الإجابة
            const answerSection = document.createElement('div');
            answerSection.className = 'answer-section';

            const showAnswerBtn = document.createElement('button');
            showAnswerBtn.className = 'show-answer-btn';
            showAnswerBtn.innerHTML = '<i class="fas fa-eye"></i> عرض الإجابة';
            showAnswerBtn.dataset.questionId = question.id;

            const answerContent = document.createElement('div');
            answerContent.className = 'answer-content';
            answerContent.id = `answer-${question.id}`;
            answerContent.innerHTML = `
                        <div class="answer-title"><i class="fas fa-check-circle"></i> الإجابة الصحيحة:</div>
                        <div class="answer-text">${question.options[question.answer]}</div>
                        <div class="answer-title" style="margin-top: 10px; color: var(--secondary-color);">
                            <i class="fas fa-lightbulb"></i> الشرح:
                        </div>
                        <div class="answer-text">${question.explanation}</div>
                    `;

            showAnswerBtn.addEventListener('click', function () {
                const answerId = this.dataset.questionId;
                const answerElement = document.getElementById(`answer-${answerId}`);
                answerElement.classList.toggle('show');

                // تغيير نص الزر
                if (answerElement.classList.contains('show')) {
                    this.innerHTML = '<i class="fas fa-eye-slash"></i> إخفاء الإجابة';
                } else {
                    this.innerHTML = '<i class="fas fa-eye"></i> عرض الإجابة';
                }
            });

            answerSection.appendChild(showAnswerBtn);
            answerSection.appendChild(answerContent);

            // تجميع جميع الأجزاء
            questionItem.appendChild(questionText);
            questionItem.appendChild(optionsList);
            questionItem.appendChild(answerSection);

            questionList.appendChild(questionItem);
        });

        // تجميع قسم الفصل
        chapterSection.appendChild(chapterHeader);
        chapterSection.appendChild(questionList);

        quizContent.appendChild(chapterSection);
    });
}

// اختيار إجابة
function selectAnswer(questionId, optionIndex, optionElement) {
    // حفظ إجابة المستخدم
    userAnswers[questionId] = optionIndex;

    // إعادة رسم السؤال لتحديث المظهر
    renderQuestion(questionId);

    // تحديث الإحصائيات
    updateStats();

    // حفظ الإجابة
    saveAnswers();

    // إشعار
    showNotification('تم حفظ إجابتك!', 'info');
}

// إعادة رسم سؤال معين
function renderQuestion(questionId) {
    // البحث عن السؤال في البيانات
    let targetQuestion = null;
    let chapterIndex = -1;

    for (let i = 0; i < quizData.length; i++) {
        const chapter = quizData[i];
        const question = chapter.questions.find(q => q.id == questionId);
        if (question) {
            targetQuestion = question;
            chapterIndex = i;
            break;
        }
    }

    if (!targetQuestion) return;

    // إعادة بناء عنصر السؤال
    const questionElement = document.getElementById(`question-${questionId}`);
    if (!questionElement) return;

    const questionContainer = questionElement.parentElement;
    const questionIndex = Array.from(questionContainer.children).indexOf(questionElement);

    // إنشاء السؤال الجديد
    const newQuestionElement = document.createElement('div');
    newQuestionElement.className = 'question-item';
    newQuestionElement.id = `question-${questionId}`;

    // حالة التصحيح
    const isChecked = checkedAnswers[questionId] !== undefined;
    const isCorrect = checkedAnswers[questionId] === true;

    if (isChecked) {
        newQuestionElement.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    // مؤشر حالة السؤال
    if (isChecked) {
        const statusIcon = document.createElement('div');
        statusIcon.className = `question-status ${isCorrect ? 'correct' : 'wrong'}`;
        statusIcon.innerHTML = isCorrect ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>';
        newQuestionElement.appendChild(statusIcon);
    }

    // نص السؤال
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.innerHTML = `<span class="question-number">${targetQuestion.id}</span> ${targetQuestion.text}`;

    // قائمة الخيارات
    const optionsList = document.createElement('ul');
    optionsList.className = 'options-list';

    const optionLetters = ['أ', 'ب', 'ج', 'د'];
    const userAnswer = userAnswers[questionId];

    targetQuestion.options.forEach((option, oIndex) => {
        const optionItem = document.createElement('li');
        optionItem.className = 'option-item';
        optionItem.dataset.optionIndex = oIndex;
        optionItem.dataset.questionId = questionId;

        // تحديد إذا كان هذا الخيار هو إجابة المستخدم
        if (userAnswer === oIndex) {
            optionItem.classList.add('selected');
        }

        // تحديد إذا كان هذا الخيار صحيح/خطأ بعد التصحيح
        if (isChecked) {
            if (oIndex === targetQuestion.answer) {
                optionItem.classList.add('correct');
            } else if (userAnswer === oIndex && oIndex !== targetQuestion.answer) {
                optionItem.classList.add('wrong');
            }
        }

        // إضافة أيقونة التغذية الراجعة
        let feedbackIcon = '';
        if (isChecked) {
            if (oIndex === targetQuestion.answer) {
                feedbackIcon = '<i class="fas fa-check correct-icon option-feedback"></i>';
            } else if (userAnswer === oIndex && oIndex !== targetQuestion.answer) {
                feedbackIcon = '<i class="fas fa-times wrong-icon option-feedback"></i>';
            }
        }

        optionItem.innerHTML = `
                    ${feedbackIcon}
                    <span class="option-letter">${optionLetters[oIndex]}</span>
                    ${option}
                `;

        // إضافة حدث النقر على الخيار
        optionItem.addEventListener('click', () => {
            selectAnswer(questionId, oIndex, optionItem);
        });

        optionsList.appendChild(optionItem);
    });

    // قسم الإجابة
    const answerSection = document.createElement('div');
    answerSection.className = 'answer-section';

    const showAnswerBtn = document.createElement('button');
    showAnswerBtn.className = 'show-answer-btn';
    showAnswerBtn.innerHTML = '<i class="fas fa-eye"></i> عرض الإجابة';
    showAnswerBtn.dataset.questionId = questionId;

    const answerContent = document.createElement('div');
    answerContent.className = 'answer-content';
    answerContent.id = `answer-${questionId}`;
    answerContent.innerHTML = `
                <div class="answer-title"><i class="fas fa-check-circle"></i> الإجابة الصحيحة:</div>
                <div class="answer-text">${targetQuestion.options[targetQuestion.answer]}</div>
                <div class="answer-title" style="margin-top: 10px; color: var(--secondary-color);">
                    <i class="fas fa-lightbulb"></i> الشرح:
                </div>
                <div class="answer-text">${targetQuestion.explanation}</div>
            `;

    showAnswerBtn.addEventListener('click', function () {
        const answerId = this.dataset.questionId;
        const answerElement = document.getElementById(`answer-${answerId}`);
        answerElement.classList.toggle('show');

        // تغيير نص الزر
        if (answerElement.classList.contains('show')) {
            this.innerHTML = '<i class="fas fa-eye-slash"></i> إخفاء الإجابة';
        } else {
            this.innerHTML = '<i class="fas fa-eye"></i> عرض الإجابة';
        }
    });

    answerSection.appendChild(showAnswerBtn);
    answerSection.appendChild(answerContent);

    // تجميع جميع الأجزاء
    newQuestionElement.appendChild(questionText);
    newQuestionElement.appendChild(optionsList);
    newQuestionElement.appendChild(answerSection);

    // استبدال السؤال القديم بالجديد
    questionContainer.replaceChild(newQuestionElement, questionElement);
}

// تصحيح جميع الإجابات
function checkAllAnswers() {
    // تصحيح كل سؤال
    quizData.forEach(chapter => {
        chapter.questions.forEach(question => {
            const userAnswer = userAnswers[question.id];
            if (userAnswer !== undefined) {
                checkedAnswers[question.id] = (userAnswer === question.answer);
            }
        });
    });

    // إعادة رسم جميع الأسئلة
    renderQuiz();

    // تحديث الإحصائيات
    updateStats();

    // عرض النتائج
    showResults();

    // إشعار
    const correctCount = Object.values(checkedAnswers).filter(val => val === true).length;
    showNotification(`تم تصحيح الإجابات! لديك ${correctCount} إجابة صحيحة`, 'info');
}

// عرض النتائج
function showResults() {
    const correctCount = Object.values(checkedAnswers).filter(val => val === true).length;
    const wrongCount = Object.values(checkedAnswers).filter(val => val === false).length;
    const unansweredCount = totalQuestions - Object.keys(checkedAnswers).length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    // تحديث عناصر النتائج
    document.getElementById('finalScore').textContent = `${scorePercentage}%`;
    document.getElementById('finalCorrect').textContent = correctCount;
    document.getElementById('finalWrong').textContent = wrongCount;
    document.getElementById('finalUnanswered').textContent = unansweredCount;

    // تحديد رسالة النتيجة
    let resultMessage = '';
    if (scorePercentage === 100) {
        resultMessage = 'ممتاز! جاوبتي على كلشي صحيح. راك فاهم كيفاش كيخدم الكمبيوتر مزيان! 🎉';
    } else if (scorePercentage >= 80) {
        resultMessage = 'تبارك الله عليك! عندك فهم ممتاز للأساسيات. راجع غير شي لعيبات بساط اللي غلطتي فيهم. 👍';
    } else if (scorePercentage >= 60) {
        resultMessage = 'مزيان! راك شاد الأساس، ولكن كاين شي حوايج خاصك تزيد تفهمهم. عاود ضرب طليلة على الكتاب. 📚';
    } else if (scorePercentage >= 40) {
        resultMessage = 'ماشي مشكل! عاود قرا الكتاب بشوية عليك وعاود الكويز، وغادي تجاوب حسن المرة الجاية. 💪';
    } else {
        resultMessage = 'خاصك تعاود تركز مع الكتاب شوية. الفهم كيجي بالممارسة، ما تيأشش! 📖';
    }

    document.getElementById('resultMessage').textContent = resultMessage;

    // إظهار قسم النتائج
    document.getElementById('resultsSummary').classList.add('show');
}

// إعادة بدء الكويز
function resetQuiz() {
    // تأكيد الإعادة
    if (!confirm('هل أنت متأكد من أنك تريد إعادة بدء الكويز؟ ستتم إزالة جميع إجاباتك.')) {
        return;
    }

    // إعادة تعيين البيانات
    userAnswers = {};
    checkedAnswers = {};

    // إعادة تعيين التخزين المحلي
    localStorage.removeItem('quizAnswers');
    localStorage.removeItem('quizChecked');

    // إعادة الرسم
    renderQuiz();
    updateStats();

    // إخفاء النتائج
    document.getElementById('resultsSummary').classList.remove('show');

    // إشعار
    showNotification('تم إعادة بدء الكويز! يمكنك البدء من جديد.', 'info');
}

// حفظ الإجابات
function saveAnswers() {
    localStorage.setItem('quizAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('quizChecked', JSON.stringify(checkedAnswers));
}

// تحميل الإجابات المحفوظة
function loadSavedAnswers() {
    const savedAnswers = localStorage.getItem('quizAnswers');
    const savedChecked = localStorage.getItem('quizChecked');

    if (savedAnswers) {
        userAnswers = JSON.parse(savedAnswers);
    }

    if (savedChecked) {
        checkedAnswers = JSON.parse(savedChecked);
    }

    // إذا كانت هناك إجابات محفوظة، عرض النتائج
    if (Object.keys(userAnswers).length > 0 || Object.keys(checkedAnswers).length > 0) {
        renderQuiz();
        updateStats();

        if (Object.keys(checkedAnswers).length > 0) {
            showResults();
        }
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // تغيير الوضع الليلي/النهاري
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function (e) {
        // Ctrl+D لتغيير الوضع
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }

        // Ctrl+Enter لتصحيح الإجابات
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            checkAllAnswers();
        }

        // Esc لإخفاء جميع الإجابات
        if (e.key === 'Escape') {
            hideAllAnswers();
        }
    });
}

// تبديل الوضع الليلي/النهاري
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    updateThemeToggle();

    // حفظ التفضيل
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// تحديث زر تبديل الوضع
function updateThemeToggle() {
    const icon = document.querySelector('#themeToggle i');
    const button = document.getElementById('themeToggle');

    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        button.innerHTML = '<i class="fas fa-sun"></i> وضع النهار';
    } else {
        icon.className = 'fas fa-moon';
        button.innerHTML = '<i class="fas fa-moon"></i> وضع الليل';
    }
}

// عرض جميع الإجابات
function showAllAnswers() {
    document.querySelectorAll('.answer-content').forEach(answer => {
        answer.classList.add('show');
    });

    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> إخفاء الإجابة';
    });

    // إشعار
    showNotification('تم عرض جميع الإجابات', 'info');
}

// إخفاء جميع الإجابات
function hideAllAnswers() {
    document.querySelectorAll('.answer-content').forEach(answer => {
        answer.classList.remove('show');
    });

    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.innerHTML = '<i class="fas fa-eye"></i> عرض الإجابة';
    });

    // إشعار
    showNotification('تم إخفاء جميع الإجابات', 'info');
}

// التمرير إلى الأعلى
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// إظهار إشعار
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: ${type === 'info' ? 'var(--secondary-color)' : 'var(--accent-color)'};
                color: white;
                padding: 12px 20px;
                border-radius: var(--border-radius);
                z-index: 10000;
                box-shadow: var(--shadow);
                animation: slideInUp 0.3s ease, fadeOut 0.3s ease 2.7s;
                max-width: 300px;
            `;

    // إضافة أنيميشن
    const style = document.createElement('style');
    style.textContent = `
                @keyframes slideInUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `;
    document.head.appendChild(style);

    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 3000);
}
