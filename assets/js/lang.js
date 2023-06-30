$(function(){
    setLanguages(sessionStorage.getItem("lang"));
});
const translation={
    en:{
        homeNav:"Home",   
        servicesNav:"Services",   
        screenNav:"Screens",   
        contactNav:"Contact Us",   
        languagesNav:"Languages",     
        resturant:"Restaurants",     
        coffee:"Coffee Shops",     
        school:"Schools",     
        hosiptal:"Hospitals",     
        private:"institutions",     
        public:"Others",     
        createPara:"Create your own website or application and put it on the market.",  
        createButton:"Create Your website or application Now",  
        others:"public & private institutions",
        resPara:"Learn a new and easier way to manage your restaurant through the modern website And make your customers feel safe and comfortable by ordering from your website, which is available around the clock",
        cofPara:"Enter a new world of convenience and complete control with the Electronic Café Management System. And raise the popularity of your coffee shop through the electronic marketing provided by your website ",
        schPara:"The reliance on technology in school management is increasing, and creating a website for school management is one of the effective solutions to improve the educational process.",
        hosPara:"Creating a website for hospital management provides an effective solution to improve administrative processes and deliver better services to patients and hospital staf",
        insPara:"Creating a website for private and public institutions that provides an effective way to communicate with customers, visitors and employees. ",
        othPara:"Building a website for any type of business is a current necessity to communicate with customers and visitors and promote the products or services offered by the business",
        exp:"Explore more",
        about:"About us",
        aboutP:"BESTÄLLA is one of the leading companies in the industry that develops services and builds apps, sites and systems to make the job easier for our customers. We are proud to be a leader in our industry and offer the most innovative and user-friendly solutions for our customers. Our team consists of some of the most talented and experienced engineers and technicians in the technology industry. Our philosophy is based on an open and collaborative culture, where we believe in collaborating with our partners and customers to create the best solutions for their needs. We also use open-source software, which enables us to offer our customers a flexible, cost-effective and secure technology. We have a highly committed customer service group that is always ready to help our customers with all questions and expectations. Our success is based on our ability to deliver high quality technology and exceptional customer service. We look forward to working with you and helping you achieve your goals.",
        bServices:"Bestalla Services",
        bServicesP:"Our company is a leading provider of technology solutions, offering comprehensive and innovative services to meet the needs of our customers. Our services include software development, website design and development, data management, and much more. We work hard to improve performance, increase productivity, and reduce costs for our clients by using the latest technologies and tools available in the market. You can rely on us to improve your business and achieve your goals on time and with the highest quality",
        restTitle:"Restaurants",
        r0:"A website can offer various services and features for a restaurant, including : ",
        r1:"1- Advertising and promotion: a website can help the restaurant to promote its services and products, and attract more customers through digital marketing channels.",
        r2:"2- Online reservation and ordering: a website can provide a pre-booking service for customers, as well as allow them to place their orders online, saving time and effort for both customers and staff.",
        r3:"3- Digital menus: a website can display the restaurant's digital menu, with product details and prices, helping customers to choose what they want before arriving at the restaurant.",
        r4:"4- Social interaction enhancement: a website can also enhance social interaction with customers, allowing them to provide feedback and comments on the restaurant's services, as well as share their experiences on social media.",
        r5:"5- Information provision: a website can provide important information about the restaurant, such as opening hours and available parking spaces and location, helping customers to plan and reacthe restaurant more effectively.",
        coffeeshops:"Coffee Shops",
        c0:"A website for cafes can offer many services and features that make the experience of visiting the café smoother and more comfortable, such as:",
        c1:"1- Displaying the menu of food, drinks, and desserts available in the café, including prices and descriptions of the items, and updating the menu periodically and adjusting prices as needed.",
        c2:"2- Online seat reservations: Customers can reserve suitable seats in the café online and specify the appropriate time to attend in case the café is crowded.",
        c3:"3- Electronic payment feature: Customers can pay online when booking, or even when placing orders in the café, which saves a lot of time and effort for customers.",
        c4:"4- Adding a shipping page: The website can also provide a shipping service to customers who want to get the different items available in the café online.",
        c5:"5- Providing services that customers need: The website can also provide additional services such as free Wi-Fi, games, entertainment activities, children's areas, and more, to make the customer experience more enjoyable and exciting.",
        c6:"6- Interacting with customers: The website can also help interact with customers, respond to their inquiries and complaints, through social media or the contact page on the website..",
        Schools:"Schools",
        s0:"A website for schools and universities can offer many services and benefits for students, staff, and visitors, including:",
        s1:"1- Announcing upcoming conferences, events, and training courses.",
        s2:"2- Publishing news and announcements related to the school or university.",
        s3:"3- Providing academic information, curricula, and available academic programs.",
        s4:"4- Providing technical support service for students and staff.",
        s5:"5- Managing academic and administrative affairs such as setting exam schedules, registering for courses, and issuing certificates.",
        s6:"6- Offering electronic lending service for scientific books, articles, and research.",
        s7:"7- Providing academic research resources and digital libraries.",
        s8:"8- Offering a quick communication and electronic correspondence between students, teachers, and administrators.",
        s9:"9- Providing a section for vacant job positions and managing the recruitment process.",
        s10:"10- Managing accounts, financial and statistical reports for the school or university.",
        sf:"A website for schools and universities can be an important factor in providing academic information and services for students, staff, and visitors, which helps improve communication, academic quality, and the educational process.",
        Hospitals:"Hospitals",
        h0:"  A hospital website can offer many services and features that facilitate communication between patients and hospitals. Among these services and features are: ",
        h1:"1- Online appointment booking: Patients can book their medical appointments directly through the website instead of physically going to the hospital to book, saving time and effort.",
        h2:"2- Providing information about doctors and specialists: The website can provide detailed information about the doctors and specialists working in the hospital, including their specialties, academic qualifications, and practical experience.",
        h3:"3- Displaying medical services: The website can display information about the medical services available in the hospital, including X-rays, laboratories, intensive care, surgery, and more.",
        h4:"4- Providing medical test results: The website can provide medical test results online, making it easier for patients to access their medical information.",
        h5:"5- Communicating with doctors and nurses: The website can provide a chat or email service for patients to communicate with doctors and nurses and ask questions and inquiries.",
        h6:"6- Providing information about treatments and medications: The website can provide detailed information about the treatments and medications available in the hospital, including brand names, doses, and special warnings.",
        Gosomewhere:"Contact us",
        institution:"public & private institutions",
        p0:"A website can offer several advantages to both public and private institutions, including:",
        p1:"1- A means of communication: A website can be used as a means of communicating with the public and providing necessary information about the institution, as well as benefiting from the opinions and suggestions of the public.",
        p2:"2- Advertising products and services: Public and private institutions can advertise their products and services on the website, thus increasing brand awareness and sales.",
        p3:"3- Job search: Public and private institutions can publish available job opportunities on the website, thus attracting those interested in applying for the available jobs.",
        p4:"4- Technical support: A website can provide technical support to customers and users, either through live chat, email or a dedicated phone number for technical support.",
        p5:"5- Providing educational content: Public and private institutions can provide educational and informative content on the website, through articles, videos, and free lessons.",
        p6:"6- Electronic management: A website can be used to electronically manage the institution's operations, using content management systems, customer relationship management systems, and business management systems.",
        pf:"These are just some examples of what a website can offer.",
        Others:"Others",
        o0:"There are many technical services and technology provided by Pastilla Company in various fields. Any idea can become a reality. Contact us about any idea you want to achieve.",
        screenTitle:"Advertising screens",
        screenP:"Advertising screens are an effective and important tool used in restaurants, cafes, and any other commercial establishment. They help to improve the customer experience and increase revenue. By using advertising screens in these locations, businesses can advertise their products and services in an attractive and effective way, which helps to grab customers' attention and pique their interest in the products and services on offer. Moreover, advertising screens are an excellent way to improve the customer experience and increase satisfaction levels. Screens can be used to display menus, special offers, and discounts, which helps to improve the ordering process and save time and effort for customers. Additionally, advertising screens can help to increase sales. They can be used to display specific products or advertise special offers and discounts, which can incentivize customers to make purchases and increase sales volume. Given these numerous benefits, using advertising screens in restaurants, cafes, and any other commercial establishment is an important investment for improving the customer experience and increasing revenue. ",
        screenBtn:"Order ad screen services offered by Bestalla",
        contactTitle:"contact information",
        phone:"Phone",
        adress:"Adress",
        email:"Email",
        stay:"Stay in touch with us",
        name:"Your Name",
        emailInput:"Email",
        company:"Company Name (optional)",
        phoneInput:"Phone",
        city:"Your City",
        description:"Description",
        sub:"Submit your request",
        
    },

    ar:{
        homeNav:"الصفحة الرئيسية",   
        servicesNav:"الخدمات",   
        screenNav:"الشاشات",   
        contactNav:"اتصل بنا",   
        languagesNav:"اللغات",  
        resturant:"المطاعم",     
        coffee:"المقاهي",     
        school:"المدارس",     
        hosiptal:"المشافي",     
        private:"المؤوسسات",     
        public:"اخرى",    
        createPara:"قم بإنشاء موقع الويب أو التطبيق الخاص بك وطرحه في السوق",  
        createButton:"قم بإنشاء موقع الويب أو التطبيق الخاص بك الآن",  
        others:"المؤوسسات العامة والخاصة ",
        resPara:"تعلّم الطريقة الجديدة والأسهل لإدارة مطعمك من خلال الموقع الحديث، واجعل زبائنك يشعرون بالأمان والراحة عند الطلب من موقعك الذي يتوفر على مدار الساعة.",
        cofPara:"ادخل إلى عالم جديد من الراحة والتحكم الكامل مع نظام إدارة المقهى الإلكتروني. ورفع شعبية المقهى الخاص بك من خلال التسويق الإلكتروني الذي يوفره موقع الويب الخاص بك",
        schPara:"يتزايد الاعتماد على التكنولوجيا في إدارة المدرسة ، ويعد إنشاء موقع إلكتروني لإدارة المدرسة أحد الحلول الفعالة لتحسين العملية التعليمية.",
        hosPara:"يوفر إنشاء موقع إلكتروني لإدارة المستشفيات حلاً فعالاً لتحسين العمليات الإدارية وتقديم خدمات أفضل للمرضى وموظفي المستشفى",
        insPara:"إنشاء موقع إلكتروني للمؤسسات الخاصة والعامة يوفر وسيلة فعالة للتواصل مع العملاء والزوار والموظفين. ",
        othPara:"يعد إنشاء موقع ويب لأي نوع من الأعمال ضرورة حالية للتواصل مع العملاء والزائرين والترويج للمنتجات أو الخدمات التي تقدمها الشركة",
        exp:"استكشف المزيد",
        about:"حولنا",
        aboutP:"BESTÄLLA هي واحدة من الشركات الرائدة في الصناعة التي تطور الخدمات وتبني التطبيقات والمواقع والأنظمة لتسهيل العمل على عملائنا. نحن فخورون بأن نكون روادًا في صناعتنا ونقدم الحلول الأكثر ابتكارًا وسهولة في الاستخدام لعملائنا. يتكون فريقنا من بعض المهندسين والفنيين الأكثر موهبة وخبرة في صناعة التكنولوجيا. تستند فلسفتنا على ثقافة منفتحة وتعاونية ، حيث نؤمن بالتعاون مع شركائنا وعملائنا لخلق أفضل الحلول لاحتياجاتهم. نستخدم أيضًا برامج مفتوحة المصدر ، والتي تمكننا من أن نقدم لعملائنا تقنية مرنة وفعالة من حيث التكلفة وآمنة. لدينا مجموعة خدمة عملاء ملتزمة للغاية ومستعدة دائمًا لمساعدة عملائنا في جميع الأسئلة والتوقعات. يعتمد نجاحنا على قدرتنا على تقديم تقنية عالية الجودة وخدمة عملاء استثنائية. نتطلع إلى العمل معك ومساعدتك في تحقيق أهدافك.",
        bServices:"خدمات بستيلا",
        bServicesP:"تعد شركتنا الرائدة في مجال التكنولوجيا، حيث نوفر حلولًا متكاملة ومبتكرة لتلبية احتياجات عملائنا. تشمل خدماتنا تطوير البرمجيات، وتصميم وتطوير المواقع الإلكترونية، وإدارة البيانات، وغيرها الكثير. نحن نعمل بجد لتحسين الأداء وزيادة الإنتاجية وتقليل التكاليف لعملائنا، وذلك عن طريق استخدام أحدث التقنيات والأدوات المتوفرة في السوق. يمكنك الاعتماد علينا لتحسين عملك وتحقيق أهدافك في الوقت المحدد وبأعلى مستوى من الجودة.",
        restTitle:"المطاعم",
        r0:" : يمكن أن يقدم موقع الويب خدمات وميزات متنوعة للمطاعم  بما في ذلك",
        r1:" .الإعلان والترويج: يمكن للموقع الإلكتروني أن يساعد المطعم في الترويج لخدماته ومنتجاته ، وجذب المزيد من العملاء من خلال قنوات التسويق الرقمي",
        r2:" .الحجز والطلب عبر الإنترنت: يمكن أن يوفر موقع الويب خدمة الحجز المسبق للعملاء ، فضلاً عن السماح لهم بتقديم طلباتهم عبر الإنترنت ، مما يوفر الوقت والجهد لكل من العملاء والموظفين",
        r3:" .القوائم الرقمية: يمكن للموقع عرض القائمة الرقمية للمطعم ، مع تفاصيل المنتج والأسعار ، مما يساعد العملاء على اختيار ما يريدون قبل الوصول إلى المطعم",
        r4:" .تحسين التفاعل الاجتماعي: يمكن لموقع الويب أيضًا تعزيز التفاعل الاجتماعي مع العملاء ، مما يتيح لهم تقديم الملاحظات والتعليقات على خدمات المطعم ، فضلاً عن مشاركة تجاربهم على وسائل التواصل الاجتماعي",
        r5:" .توفير المعلومات: يمكن أن يوفر موقع الويب معلومات مهمة حول المطعم ، مثل ساعات العمل وأماكن وقوف السيارات المتاحة والموقع ، مما يساعد العملاء على التخطيط والوصول إلى المطعم بشكل أكثر فعالية",
        coffeeshops:"المقاهي",
        c0:" : يمكن أن يقدم موقع الويب للمقاهي العديد من الخدمات والميزات التي تجعل تجربة زيارة الزبائن للمقهى أكثر سلاسة وراحة، ومنها ",
        c1:" .عرض قائمة الطعام والمشروبات والحلويات المتاحة في المقهى بما في ذلك الأسعار ووصف الأصناف، ويمكن تحديث قائمة الطعام بشكل دوري وتعديل الأسعار حسب الحاجة",
        c2:" .حجز المقاعد عبر الإنترنت: يمكن للزبائن حجز المقاعد المناسبة لهم في المقهى عبر الإنترنت، وتحديد الوقت المناسب للحضور في حال كان المقهى مزدحماً",
        c3:" .ميزة الدفع الإلكتروني: يمكن للزبائن الدفع عبر الإنترنت عند الحجز، أو حتى عندما يقومون بالطلبات في المقهى، مما يوفر الكثير من الوقت والجهد للزبائن",
        c4:" .إضافة صفحة الشحن: يمكن للموقع أيضًا أن يقدم خدمة الشحن إلى الزبائن الذين يرغبون في الحصول على الأصناف المختلفة المتاحة في المقهى وذلك عبر الإنترنت",
        c5:" .توفير الخدمات التي يحتاجها الزبون: يمكن للموقع أيضًا أن يقدم خدمات إضافية مثل خدمة الواي فاي المجانية والألعاب والنشاطات الترفيهية والأماكن الخاصة بالأطفال وغيرها، وذلك لجعل تجربة الزبائن أكثر متعة وإثارة",
        c6:" .التفاعل مع الزبائن: يمكن للموقع أيضًا أن يساعد في التفاعل مع الزبائن والرد على استفساراتهم وشكاويهم، وذلك عبر وسائل التواصل الاجتماعي أو صفحة الأتصال على الموقع",
        Schools:"المدارس",
        s0:":  يمكن لموقع الويب للمدارس والجامعات أن يقدم العديد من الخدمات والمزايا للطلاب والموظفين والزوار، بما في ذلك",
        s1:" .الإعلان عن المؤتمرات والفعاليات القادمة والدورات التدريبية ",
        s2:" .نشر الأخبار والإعلانات المتعلقة بالمدرسة أو الجامعة ",
        s3:" .توفير المعلومات الأكاديمية والمناهج الدراسية والبرامج الأكاديمية المتاحة ",
        s4:" .إتاحة خدمة الدعم الفني والتقني للطلاب والموظفين ",
        s5:" .إدارة الشؤون الأكاديمية والإدارية مثل تحديد جداول الامتحانات والتسجيل في المواد وإصدار الشهادات ",
        s6:" .إتاحة خدمة الإعارة الالكترونية للكتب والمقالات العلمية والأبحاث ",
        s7:" .توفير موارد البحث الأكاديمية والمكتبات الرقمية ",
        s8:" .إتاحة خدمة الاتصال السريع والمراسلة الإلكترونية بين الطلاب والمعلمين والإداريين",
        s9:" .توفير قسم للوظائف الشاغرة وإدارة عملية التوظيف ",
        s10:" .إدارة الحسابات والتقارير المالية والإحصائية للمدرسة أو الجامعة ",
        sf:" .يمكن أن يكون موقع الويب للمدارس والجامعات عاملًا هامًا في توفير المعلومات والخدمات الأكاديمية للطلاب والموظفين والزوار، مما . يساعد في تحسين التواصل وتحسين الجودة الأكاديمية وتطوير العملية التعليمية",
        Hospitals:"المشافي",
        h0:" : يمكن لموقع الويب للمشافي أن يقدم العديد من الخدمات والمميزات التي تسهل عملية التواصل بين المرضى والمشافي، ومن بين هذه الخدمات والمميزات ",
        h1:" .حجز المواعيد عبر الإنترنت: يمكن للمرضى حجز مواعيدهم الطبية مباشرةً من خلال الموقع بدلاً من الحضور شخصياً إلى المشفى للحجز، مما يوفر الوقت والجهد",
        h2:" .توفير معلومات عن الأطباء والمتخصصين: يمكن للموقع أن يوفر معلومات مفصلة عن الأطباء والمتخصصين العاملين في المشفى، بما في ذلك تخصصاتهم ومؤهلاتهم الأكاديمية والخبرات العملية",
        h3:" .عرض الخدمات الطبية: يمكن للموقع عرض معلومات عن الخدمات الطبية المتاحة في المشفى، بما في ذلك الأشعة السينية، والمختبرات، والعناية المركزة، والجراحة، وغيرها",
        h4:" .توفير نتائج الفحوصات الطبية: يمكن للموقع توفير نتائج الفحوصات الطبية عبر الإنترنت، مما يسهل على المرضى الحصول على المعلومات الطبية الخاصة بهم",
        h5:" .التواصل مع الأطباء والممرضين: يمكن للموقع توفير خدمة الدردشة أو البريد الإلكتروني للمرضى للتواصل مع الأطباء والممرضين وطرح الأسئلة والاستفسارات",
        h6:" .توفير معلومات عن العلاجات والأدوية: يمكن للموقع توفير معلومات مفصلة عن العلاجات والأدوية المتاحة في المشفى، بما في ذلك الأسماء التجارية والجرعات والتحذيرات الخاصة بها",
        Gosomewhere:"اتصل بنا",
        institution:"المؤسسات العامة والخاصة",
        p0:" : يمكن لموقع الويب تقديم العديد من المزايا للمؤسسات العامة والخاصة، من بينها",
        p1:" .وسيلة للتواصل: يمكن استخدام الموقع الإلكتروني كوسيلة للتواصل مع الجمهور وتقديم المعلومات اللازمة عن المؤسسة، وكذلك الاستفادة من آراء واقتراحات الجمهور",
        p2:" .الإعلان عن المنتجات والخدمات: يمكن للمؤسسات العامة والخاصة الإعلان عن منتجاتها وخدماتها على الموقع الإلكتروني وبالتالي زيادة الوعي بالعلامة التجارية وزيادة المبيعات",
        p3:" .البحث عن الوظائف: يمكن للمؤسسات العامة والخاصة نشر فرص العمل المتاحة لديها على الموقع الإلكتروني وبالتالي جذب المهتمين بالتقدم للوظائف المتاحة",
        p4:" .تقديم الدعم الفني: يمكن للموقع الإلكتروني توفير دعم فني للعملاء والمستخدمين، وذلك عن طريق الدردشة الحية أو البريد الإلكتروني أو رقم الهاتف المخصص للدعم الفني",
        p5:" .تقديم المحتوى التعليمي: يمكن للمؤسسات العامة والخاصة تقديم محتوى تعليمي وتثقيفي على الموقع الإلكتروني، وذلك عن طريق المقالات والفيديوهات والدروس المجانية",
        p6:" .الإدارة الإلكترونية: يمكن استخدام الموقع الإلكتروني لإدارة عمليات المؤسسة بشكل إلكتروني، وذلك من خلال استخدام نظم إدارة المحتوى ونظم إدارة العلاقات مع العملاء ونظم إدارة الأعمال",
        pf:" . وهذه بعض الأمثلة فقط على ما يمكن أن يقدمه الموقع الإلكتروني",
        Others:"اخرى",
        o0:"هناك العديد من الخدمات الفنية والتقنية التي تقدمها شركة باستيللا في مختلف المجالات. أي فكرة يمكن أن تصبح حقيقة واقعة. اتصل بنا بخصوص أي فكرة تريد تحقيقها.",
        screenTitle:"شاشات اعلانية",
        screenP:"تُعد شاشات الدعاية من الأدوات الفعالة والمهمة التي تستخدم في المطاعم والمقاهي وأي محل تجاري آخر، حيث تعمل على تحسين تجربة العملاء وزيادة الإيرادات. فعند استخدام شاشات الدعاية في هذه الأماكن، يمكن للمحلات الإعلان عن منتجاتها وخدماتها بطريقة جذابة وفعالة، مما يساعد على جذب انتباه الزبائن وإثارة اهتمامهم بالمنتجات والخدمات المعروضة. بالإضافة إلى ذلك، تُعد شاشات الدعاية وسيلة ممتازة لتحسين تجربة العملاء وزيادة مستوى الرضا لديهم، حيث يمكن استخدام الشاشات لإظهار القائمة والعروض الخاصة والخصومات المتاحة، مما يساعد على تحسين عملية الطلب وتوفير الوقت والجهد للعملاء. بالإضافة إلى ذلك، يمكن لشاشات الدعاية أن تساعد على زيادة المبيعات، حيث يمكن استخدامها لإظهار منتجات معينة أو الإعلان عن عروض خاصة وخصومات، مما يمكن أن يحفز العملاء على الشراء وزيادة حجم المبيعات. وبالنظر إلى هذه الفوائد المتعددة، فإن استخدام شاشات الدعاية في المطاعم والمقاهي وأي محل تجاري آخر يمثل استثماراً مهماً لتحسين تجربة العملاء وزيادة الإيرادات.",
        screenBtn:"Bestalla اطلب خدمات شاشة الإعلانات التي تقدمها",
        contactTitle:"معلومات التواصل",
        phone:"الهاتف",
        adress:"العنوان",
        email:"الايميل",
        stay:"ابقى على تواصل معنا",
        name:"اسمك",
        emailInput:"الايميل",
        company:"اسم الشركة (اختياري)",
        phoneInput:"الهاتف",
        city:"مدينتك",
        description:"الموضوع",
        sub:"ارسل طلبك"
    },

    sw:{
        homeNav:"Hem",   
        servicesNav:"Tjänster",   
        screenNav:"Skärmar",   
        contactNav:"Kontakta oss",   
        languagesNav:"språk",  
        resturant:"Restauranger",     
        coffee:"Kaféer",     
        school:"Skolor",     
        hosiptal:"Sjukhus",     
        private:"institutioner",     
        public:"Andra",  
        createPara:"Skapa din egen webbplats eller applikation och släpp ut den på marknaden.",  
        createButton:"Skapa din webbplats eller applikation nu",   
        others:"offentliga och privata institutioner", 
        resPara:"Lär dig ett nytt och enklare sätt att hantera din restaurang genom den moderna webbplatsen Och få dina kunder att känna sig trygga och bekväma genom att beställa från din webbplats, som är tillgänglig dygnet runt",
        cofPara:"Gå in i en ny värld av bekvämlighet och fullständig kontroll med Electronic Café Management System. Och öka populariteten för ditt kafé genom den elektroniska marknadsföringen som tillhandahålls av din webbplats",
        schPara:"Beroendet på teknik i skolledning ökar, och att skapa en webbplats för skolledning är en av de effektiva lösningarna för att förbättra utbildningsprocessen.",
        hosPara:"Att skapa en webbplats för sjukhusledning ger en effektiv lösning för att förbättra administrativa processer och leverera bättre tjänster till patienter och sjukhuspersonal",
        insPara:"Skapa en webbplats för privata och offentliga institutioner som ger ett effektivt sätt att kommunicera med kunder, besökare och anställda. ",
        othPara:"Att bygga en webbplats för alla typer av företag är en aktuell nödvändighet för att kommunicera med kunder och besökare och marknadsföra de produkter eller tjänster som erbjuds av företaget",
        exp:"Utforska mer",
        about:"Om oss",
        aboutP:"BESTÄLLA är en av de ledande företag i branchen som utväklar tjänster och bygger appar, siter och systemer för att förlätta jobbet för våra kunder. Vi är stolta över att vara en ledare inom vår bransch och erbjuda de mest innovativa och användarvänliga lösningarna för våra kunder. Vårt team består av några av de mest talangfulla och erfarna ingenjörer och tekniker i technologi branchen. Vår filosofi bygger på en öppen och samarbetande kultur, där vi tror på att samarbeta med våra partners och kunder för att skapa de bästa lösningarna för deras behov. Vi använder oss också av open-source software, vilket gör det möjligt för oss att erbjuda våra kunder en flexibel, kostnadseffektiv och säker teknologi. Vi har en starkt engagerad kundservicegrupp som alltid står redo att hjälpa våra kunder med alla frågor och förväntningar. Vår framgång bygger på vår förmåga att leverera högkvalitativ teknologi och exceptionell kundservice. Vi ser fram emot att arbeta tillsammans med dig och hjälpa dig att nå dina mål. ",
        bServices:"Beställa tjänster",
        bServicesP:"Vårt företag är en ledande leverantör av tekniklösningar och erbjuder omfattande och innovativa tjänster för att möta våra kunders behov. Våra tjänster inkluderar mjukvaruutveckling, webbdesign och utveckling, datahantering och mycket mer. Vi arbetar hårt för att förbättra prestanda, öka produktiviteten och minska kostnaderna för våra kunder genom att använda de senaste teknikerna och verktygen som finns på marknaden. Du kan lita på oss för att förbättra din verksamhet och uppnå dina mål i tid och med högsta kvalitet.",
        restTitle:"restaurang",
        r0:" En webbplats kan erbjuda olika tjänster och funktioner för en restaurang, inklusive:",
        r1:"1- Reklam och marknadsföring: en webbplats kan hjälpa restaurangen att marknadsföra sina tjänster och produkter och locka fler kunder genom digitala marknadsföringskanaler.",
        r2:"2- Onlinebokning och beställning: en webbplats kan tillhandahålla en förbokningstjänst för kunder, samt låta dem lägga sina beställningar online, vilket sparar tid och ansträngning för både kunder och personal.",
        r3:"3- Digitala menyer: en webbplats kan visa restaurangens digitala meny, med produktinformation och priser, vilket hjälper kunderna att välja vad de vill ha innan de kommer till restaurangen.",
        r4:"4- Förbättring av social interaktion: en webbplats kan också förbättra social interaktion med kunder, så att de kan ge feedback och kommentarer om restaurangens tjänster, samt dela sina erfarenheter på sociala medier. ",
        r5:"5- Informationsförsörjning: en webbplats kan ge viktig information om restaurangen, såsom öppettider och tillgängliga parkeringsplatser och plats, hjälpa cus att lanera och reagera på restaurangen mer effektivt.",
        coffeeshops:"kaféer",
        c0:"En webbplats för caféer kan erbjuda många tjänster och funktioner som gör upplevelsen av att besöka caféet smidigare och bekvämare, till exempel : ",
        c1:"1- Visa menyn för mat, drycker och desserter som är tillgängliga på caféet, inklusive priser och beskrivningar av objekten, och uppdatera menyn regelbundet och justera priserna vid behov.",
        c2:"2- Online-sittplatsreservationer: Kunder kan reservera lämpliga sittplatser på caféet online och ange lämplig tid att delta om caféet är fullsatt.",
        c3:"3- Funktion för elektronisk betalning: Kunder kan betala online vid bokning, eller till och med vid beställning på caféet, vilket sparar mycket tid och ansträngning för kunderna.",
        c4:"4- Lägga till en fraktsida: Webbplatsen kan också erbjuda en frakttjänst till kunder som vill få olika objekt tillgängliga på caféet online.",
        c5:"5- Tillhandahålla tjänster som kunder behöver: Webbplatsen kan också erbjuda ytterligare tjänster som gratis Wi-Fi, spel, underhållningsaktiviteter, barnområden och mer, för att göra kundupplevelsen mer njutbar och spännande.",
        c6:"6- Interagera med kunder: Webbplatsen kan också hjälpa till att interagera med kunder, svara på deras förfrågningar och klagomål, genom sociala medier eller kontaktsidan på webbplatsen.",
        Schools:"skolor",
        s0:"En webbplats för skolor och universitet kan erbjuda många tjänster och fördelar för studenter, personal och besökare, inklusive:",
        s1:"1- Att tillkännage kommande konferenser, evenemang och utbildningskurser.",
        s2:"2- Publicering av nyheter och tillkännagivanden relaterade till skolan eller universitetet.",
        s3:"3- Tillhandahålla akademisk information, läroplaner och tillgängliga akademiska program.",
        s4:"4- Tillhandahålla teknisk supporttjänst för studenter och personal.",
        s5:"5- Hantera akademiska och administrativa frågor som att sätta examensschema, registrera sig för kurser och utfärda certifikat.",
        s6:"6- Erbjuda elektronisk utlåningstjänst för vetenskapliga böcker, artiklar och forskning.",
        s7:"7- Tillhandahålla akademiska forskningsresurser och digitala bibliotek.",
        s8:"8- Erbjuda en snabb kommunikation och elektronisk korrespondens mellan studenter, lärare och administratörer.",
        s9:"9- Tillhandahålla en avdelning för lediga jobb och hantera rekryteringsprocessen.",
        s10:"10- Hantera konton, ekonomiska och statistiska rapporter för skolan eller universitetet.",
        sf:"En webbplats för skolor och universitet kan vara en viktig faktor för att tillhandahålla akademisk information och tjänster för studenter, personal och besökare, vilket hjälper till att förbättra kommunikationen, akademisk kvalitet och utbildningsprocessen.",
        Hospitals:"",
        h0:"Webbplatsen för sjukhus kan erbjuda många tjänster och funktioner som underlättar kommunikationen mellan patienter och sjukhus, bland dessa tjänster och funktioner:",
        h1:"1- Bokning av möten online: Patienter kan boka sina läkarbesök direkt via webbplatsen istället för att personligen besöka sjukhuset för bokning, vilket sparar tid och ansträngning.",
        h2:"2- Tillhandahålla information om läkare och specialister: Webbplatsen kan tillhandahålla detaljerad information om läkare och specialister som arbetar på sjukhuset, inklusive deras specialiteter, akademiska kvalifikationer och arbetslivserfarenheter.",
        h3:"3- Visa medicinska tjänster: Webbplatsen kan visa information om tillgängliga medicinska tjänster på sjukhuset, inklusive röntgen, laboratorier, intensivvård, kirurgi och mer.",
        h4:"4- Tillhandahålla resultat av medicinska tester: Webbplatsen kan tillhandahålla resultat av medicinska tester online, vilket gör det lättare för patienter att få tillgång till sin medicinska information.",
        h5:"5- Kommunikation med läkare och sjuksköterskor: Webbplatsen kan tillhandahålla en chatt- eller e-posttjänst för patienter att kommunicera med läkare och sjuksköterskor och ställa frågor och förfrågningar.",
        h6:"6- Tillhandahålla information om behandlingar och läkemedel: Webbplatsen kan tillhandahålla detaljerad information om tillgängliga behandlingar och läkemedel på sjukhuset, inklusive varumärken, doseringar och speciella varningar.",
        Gosomewhere:"Kontakta oss",
        institution:"offentliga och privata institutioner",
        p0:"En webbplats kan erbjuda flera fördelar för både offentliga och privata institutioner, inklusive:",
        p1:"1- Ett kommunikationsmedel: En webbplats kan användas som ett sätt att kommunicera med allmänheten och tillhandahålla nödvändig information om institutionen, samt dra nytta av allmänhetens åsikter och förslag.",
        p2:"2- Reklam för produkter och tjänster: Offentliga och privata institutioner kan annonsera sina produkter och tjänster på webbplatsen, vilket ökar varumärkeskännedom och försäljning.",
        p3:"3- Jobbsökande: Offentliga och privata institutioner kan publicera tillgängliga jobbmöjligheter på webbplatsen, vilket lockar de som är intresserade av att söka de tillgängliga jobben.",
        p4:"4- Teknisk support: En webbplats kan tillhandahålla teknisk support till kunder och användare, antingen via livechatt, e-post eller ett dedikerat telefonnummer för teknisk support.",
        p5:"5- Tillhandahållande av utbildningsinnehåll: Offentliga och privata institutioner kan tillhandahålla utbildnings- och informativt innehåll på webbplatsen, genom artiklar, videor och gratis lektioner.",
        p6:"6- Elektronisk hantering: En webbplats kan användas för att elektroniskt hantera institutionens verksamhet, genom att använda innehållshanteringssystem, kundrelationssystem och affärshanteringssystem.",
        pf:"Detta är bara några exempel på vad en webbplats kan erbjuda.",
        Others:"andra",
        o0:"Det finns många tekniska tjänster och teknik som tillhandahålls av Pastilla Company inom olika områden. Vilken idé som helst kan bli verklighet. Kontakta oss om någon idé du vill uppnå.",
        screenTitle:"Advertising screens",
        screenP:"Reklamskärmar är ett effektivt och viktigt verktyg som används i restauranger, caféer och alla andra kommersiella företag. De hjälper till att förbättra kundupplevelsen och öka intäkterna. Genom att använda reklamskärmar på dessa platser kan företag marknadsföra sina produkter och tjänster på ett attraktivt och effektivt sätt, vilket hjälper till att fånga kundernas uppmärksamhet och väcka deras intresse för de erbjudna produkterna och tjänsterna.Dessutom är reklamskärmar ett utmärkt sätt att förbättra kundupplevelsen och öka nöjdheten. Skärmar kan användas för att visa menyer, specialerbjudanden och rabatter, vilket hjälper till att förbättra beställningsprocessen och spara tid och ansträngning för kunderna.Utöver det kan reklamskärmar hjälpa till att öka försäljningen. De kan användas för att visa specifika produkter eller marknadsföra speciella erbjudanden och rabatter, vilket kan stimulera kunderna att göra köp och öka försäljningsvolymen.Med tanke på dessa många fördelar är användningen av reklamskärmar i restauranger, caféer och alla andra kommersiella företag en viktig investering för att förbättra kundupplevelsen och öka intäkterna. ",
        screenBtn:"Beställ annonsskärmstjänster som erbjuds av Bestalla",
        contactTitle:"Kontaktinformation",
        phone:"telefon",
        adress:"adress",
        email:"e-post",
        stay:"Håll kontakten med oss",
        name:"Ditt namn",
        emailInput:"E-post",
        company:"Företagsnamn (ej obligatorisk)",
        phoneInput:"Telefon",
        city:"Din stad",
        description:"Beskrivning",
        sub:"Skicka in din förfrågan"
    }


}


const languagesSelector1=document.querySelector("#mybtn1");
languagesSelector1.addEventListener("click",(event)=>{
    setLanguages(event.target.value);
    sessionStorage.setItem("lang",event.target.value);
    return;
});

const languagesSelector2=document.querySelector("#mybtn2");
languagesSelector2.addEventListener("click",(event)=>{
    setLanguages(event.target.value);
    sessionStorage.setItem("lang",event.target.value);
    return;
});

const languagesSelector3=document.querySelector("#mybtn3");
languagesSelector3.addEventListener("click",(event)=>{
    setLanguages(event.target.value);
    sessionStorage.setItem("lang",event.target.value);
    return;
});


const setLanguages=(languages)=>{
    const elements=document.querySelectorAll("[data-i18n]");
    elements.forEach((element)=>{
        const keyTranslation=element.getAttribute("data-i18n");
        element.textContent=translation[languages][keyTranslation];
        
    });

    if(languages==="ar")
    {
        

        $(".main-button a").css("font-size","13px");
        $(".Explore a").css("font-size","13px");
        $(".ardiv").css("top", "1px");

        $(".ardiv button").css("color", "darkgreen");
        $(".swdiv button").css("color", "black");
        $(".endiv button").css("color", "black");
        
        if($(".endiv").css("top")=="1px")
        {
          $(".endiv").css("top","40px");
          $(".swdiv").css("top","79px");
        }

        if($(".swdiv").css("top")=="1px")
        {
          $(".swdiv").css("top","40px");
          $(".endiv").css("top","79px");
        }

        $(".hintergrund").css("background-image","url('./assets/images/BestallaArabic.png')");
        if (screen.width < 750)
        {
            $(".hintergrund").css("background-image","url('./assets/images/BestallaArabicMobile.png')");
        }
       $("#categTit").html("تصفح من خلال  <em> فئاتنا</em> هنا ");

       $('#title').attr('placeholder','اسمك');
       $('#description').attr('placeholder','اسم الشركة (اختياري)');
       $('#username').attr('placeholder','الايميل');
       $('#price').attr('placeholder','الهاتف');
       $('#royalities').attr('placeholder','مدينتك');
       $('#descr').attr('placeholder','الموضوع');
        
    }
    if(languages==="en")
    {
        $(".endiv").css("top", "1px");

        $(".endiv button").css("color", "darkgreen");
        $(".ardiv button").css("color", "black");
        $(".swdiv button").css("color", "black");

        if($(".ardiv").css("top")=="1px")
        {
          $(".ardiv").css("top","40px");
          $(".swdiv").css("top","79px");
        }

        if($(".swdiv").css("top")=="1px")
        {
          $(".swdiv").css("top","40px");
          $(".ardiv").css("top","79px");
        }

        $(".hintergrund").css("background-image","url('./assets/images/BestallaEnglish.png')");
        if (screen.width < 750)
        {
            $(".hintergrund").css("background-image","url('./assets/images/BestallaEnglishMobile.png')");
        }
        $("#categTit").html("Browse Through Our <em>Categories</em> Here.");

        $('#title').attr('placeholder','Your Name');
       $('#description').attr('placeholder','Company Name');
       $('#username').attr('placeholder','your email');
       $('#price').attr('placeholder','your phone');
       $('#royalities').attr('placeholder','Your City');
       $('#descr').attr('placeholder','Description');

    }
    if(languages==="sw")
    {
        $(".swdiv").css("top", "1px");
        $(".swdiv button").css("color", "darkgreen");
        $(".ardiv button").css("color", "black");
        $(".endiv button").css("color", "black");

        if($(".ardiv").css("top")=="1px")
        {
          $(".ardiv").css("top","40px");
          $(".endiv").css("top","79px");
        }

        if($(".endiv").css("top")=="1px")
        {
          $(".endiv").css("top","40px");
          $(".ardiv").css("top","79px");
        }
        $(".hintergrund").css("background-image","url('./assets/images/Bestalla.png')");
        if (screen.width < 750)
        {
            $(".hintergrund").css("background-image","url('./assets/images/BestallaMobile.png')");
        }
        $("#categTit").html("Bläddra igenom våra <em>kategorier</em> här.");

       $('#title').attr('placeholder','Ditt namn');
       $('#description').attr('placeholder','Företagsnamn');
       $('#username').attr('placeholder','din E-post');
       $('#price').attr('placeholder','din Telefon');
       $('#royalities').attr('placeholder','Din stad');
       $('#descr').attr('placeholder','Beskrivning');

    }

}