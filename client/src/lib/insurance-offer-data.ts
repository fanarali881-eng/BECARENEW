// Insurance offer data for medical, malpractice, travel, and domestic worker insurance

export interface InsuranceOffer {
  id: string;
  companyName: string;
  companyLogo: string;
  type: string; // insurance category
  planName: string;
  category?: string; // ذهبية | فضية | برونزية
  mainPrice: string;
  features: { id: string; content: string; price: number; included: boolean }[];
  expenses: { id: string; reason: string; price: number }[];
}

// ==================== MEDICAL INSURANCE (طبي) ====================
export const medicalOfferData: InsuranceOffer[] = [
  {
    id: "med-001",
    companyName: "التعاونية",
    companyLogo: "https://github.com/user-attachments/assets/2341cefe-8e2c-4c2d-8ec4-3fca8699b4fb",
    type: "medical",
    planName: "الفئة الذهبية",
    category: "ذهبية",
    mainPrice: "4250.00",
    features: [
      { id: "med-f1-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f1-2", content: "تغطية الأسنان حتى 3,000 ريال", price: 350, included: false },
      { id: "med-f1-3", content: "تغطية النظارات حتى 500 ريال", price: 150, included: false },
      { id: "med-f1-4", content: "تغطية الأمومة والولادة", price: 800, included: false },
      { id: "med-f1-5", content: "شبكة مستشفيات واسعة (أكثر من 500 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e1-1", reason: "ضريبة القيمة المضافة (15%)", price: 637.50 },
    ],
  },
  {
    id: "med-002",
    companyName: "تكافل الراجحي",
    companyLogo: "https://github.com/user-attachments/assets/d37d419c-08bf-4211-b20c-7c881c9086d0",
    type: "medical",
    planName: "الفئة الفضية",
    category: "فضية",
    mainPrice: "3680.00",
    features: [
      { id: "med-f2-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f2-2", content: "تغطية الأسنان حتى 2,500 ريال", price: 300, included: false },
      { id: "med-f2-3", content: "تغطية النظارات حتى 400 ريال", price: 120, included: false },
      { id: "med-f2-4", content: "تغطية الأمومة والولادة", price: 750, included: false },
      { id: "med-f2-5", content: "شبكة مستشفيات (أكثر من 400 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e2-1", reason: "ضريبة القيمة المضافة (15%)", price: 552.00 },
    ],
  },
  {
    id: "med-003",
    companyName: "ميدغلف",
    companyLogo: "https://github.com/user-attachments/assets/b0e744e3-1d0f-4ec0-847f-3ef463aef33c",
    type: "medical",
    planName: "الفئة البرونزية",
    category: "برونزية",
    mainPrice: "2950.00",
    features: [
      { id: "med-f3-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f3-2", content: "تغطية الأسنان حتى 2,000 ريال", price: 250, included: false },
      { id: "med-f3-3", content: "تغطية الأمومة والولادة", price: 600, included: false },
      { id: "med-f3-4", content: "شبكة مستشفيات (أكثر من 350 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e3-1", reason: "ضريبة القيمة المضافة (15%)", price: 442.50 },
    ],
  },
  {
    id: "med-004",
    companyName: "بروج",
    companyLogo: "https://github.com/user-attachments/assets/75e4854c-72ef-4dfc-a8bd-09bc698b2cdf",
    type: "medical",
    planName: "الفئة الذهبية",
    category: "ذهبية",
    mainPrice: "4100.00",
    features: [
      { id: "med-f4-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f4-2", content: "تغطية الأسنان حتى 3,500 ريال", price: 400, included: false },
      { id: "med-f4-3", content: "تغطية النظارات حتى 600 ريال", price: 180, included: false },
      { id: "med-f4-4", content: "تغطية الأمومة والولادة", price: 850, included: false },
      { id: "med-f4-5", content: "شبكة مستشفيات واسعة (أكثر من 450 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e4-1", reason: "ضريبة القيمة المضافة (15%)", price: 615.00 },
    ],
  },
  {
    id: "med-005",
    companyName: "سلامة",
    companyLogo: "https://github.com/user-attachments/assets/207354df-0143-4207-b518-7f5bcc323a21",
    type: "medical",
    planName: "الفئة الفضية",
    category: "فضية",
    mainPrice: "3450.00",
    features: [
      { id: "med-f5-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f5-2", content: "تغطية الأسنان حتى 2,000 ريال", price: 280, included: false },
      { id: "med-f5-3", content: "تغطية الأمومة والولادة", price: 700, included: false },
      { id: "med-f5-4", content: "شبكة مستشفيات (أكثر من 380 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e5-1", reason: "ضريبة القيمة المضافة (15%)", price: 517.50 },
    ],
  },
  {
    id: "med-006",
    companyName: "ليفا للتأمين",
    companyLogo: "https://github.com/user-attachments/assets/f49868a4-7ec1-4636-b757-a068b00c7179",
    type: "medical",
    planName: "الفئة البرونزية",
    category: "برونزية",
    mainPrice: "2780.00",
    features: [
      { id: "med-f6-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f6-2", content: "تغطية الأسنان حتى 1,500 ريال", price: 200, included: false },
      { id: "med-f6-3", content: "شبكة مستشفيات (أكثر من 300 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e6-1", reason: "ضريبة القيمة المضافة (15%)", price: 417.00 },
    ],
  },
  {
    id: "med-007",
    companyName: "جي آي جي",
    companyLogo: "https://github.com/user-attachments/assets/69d7e375-514a-4843-9964-8700ca28110e",
    type: "medical",
    planName: "الفئة الذهبية",
    category: "ذهبية",
    mainPrice: "4500.00",
    features: [
      { id: "med-f7-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f7-2", content: "تغطية الأسنان حتى 4,000 ريال", price: 450, included: false },
      { id: "med-f7-3", content: "تغطية النظارات حتى 700 ريال", price: 200, included: false },
      { id: "med-f7-4", content: "تغطية الأمومة والولادة", price: 900, included: false },
      { id: "med-f7-5", content: "شبكة مستشفيات واسعة (أكثر من 550 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e7-1", reason: "ضريبة القيمة المضافة (15%)", price: 675.00 },
    ],
  },
  {
    id: "med-008",
    companyName: "أمانة",
    companyLogo: "https://github.com/user-attachments/assets/ced2698b-374c-4a3b-b284-23209d572ced",
    type: "medical",
    planName: "الفئة الفضية",
    category: "فضية",
    mainPrice: "3200.00",
    features: [
      { id: "med-f8-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "med-f8-2", content: "تغطية الأسنان حتى 2,000 ريال", price: 260, included: false },
      { id: "med-f8-3", content: "تغطية الأمومة والولادة", price: 650, included: false },
      { id: "med-f8-4", content: "شبكة مستشفيات (أكثر من 320 مستشفى)", price: 0, included: true },
    ],
    expenses: [
      { id: "med-e8-1", reason: "ضريبة القيمة المضافة (15%)", price: 480.00 },
    ],
  },
];

// ==================== MALPRACTICE INSURANCE (أخطاء طبية) ====================
export const malpracticeOfferData: InsuranceOffer[] = [
  {
    id: "mal-001",
    companyName: "التعاونية",
    companyLogo: "https://github.com/user-attachments/assets/2341cefe-8e2c-4c2d-8ec4-3fca8699b4fb",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "1200.00",
    features: [
      { id: "mal-f1-1", content: "تغطية المسؤولية المهنية حتى 500,000 ريال", price: 0, included: true },
      { id: "mal-f1-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f1-3", content: "تغطية التعويضات المالية للمرضى", price: 200, included: false },
      { id: "mal-f1-4", content: "تغطية فقدان الدخل أثناء التحقيق", price: 350, included: false },
    ],
    expenses: [
      { id: "mal-e1-1", reason: "ضريبة القيمة المضافة (15%)", price: 180.00 },
    ],
  },
  {
    id: "mal-002",
    companyName: "تكافل الراجحي",
    companyLogo: "https://github.com/user-attachments/assets/d37d419c-08bf-4211-b20c-7c881c9086d0",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "980.00",
    features: [
      { id: "mal-f2-1", content: "تغطية المسؤولية المهنية حتى 400,000 ريال", price: 0, included: true },
      { id: "mal-f2-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f2-3", content: "تغطية التعويضات المالية للمرضى", price: 180, included: false },
    ],
    expenses: [
      { id: "mal-e2-1", reason: "ضريبة القيمة المضافة (15%)", price: 147.00 },
    ],
  },
  {
    id: "mal-003",
    companyName: "ميدغلف",
    companyLogo: "https://github.com/user-attachments/assets/b0e744e3-1d0f-4ec0-847f-3ef463aef33c",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "850.00",
    features: [
      { id: "mal-f3-1", content: "تغطية المسؤولية المهنية حتى 350,000 ريال", price: 0, included: true },
      { id: "mal-f3-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f3-3", content: "تغطية فقدان الدخل أثناء التحقيق", price: 300, included: false },
    ],
    expenses: [
      { id: "mal-e3-1", reason: "ضريبة القيمة المضافة (15%)", price: 127.50 },
    ],
  },
  {
    id: "mal-004",
    companyName: "سلامة",
    companyLogo: "https://github.com/user-attachments/assets/207354df-0143-4207-b518-7f5bcc323a21",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "1050.00",
    features: [
      { id: "mal-f4-1", content: "تغطية المسؤولية المهنية حتى 450,000 ريال", price: 0, included: true },
      { id: "mal-f4-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f4-3", content: "تغطية التعويضات المالية للمرضى", price: 220, included: false },
      { id: "mal-f4-4", content: "تغطية فقدان الدخل أثناء التحقيق", price: 320, included: false },
    ],
    expenses: [
      { id: "mal-e4-1", reason: "ضريبة القيمة المضافة (15%)", price: 157.50 },
    ],
  },
  {
    id: "mal-005",
    companyName: "جي آي جي",
    companyLogo: "https://github.com/user-attachments/assets/69d7e375-514a-4843-9964-8700ca28110e",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "1350.00",
    features: [
      { id: "mal-f5-1", content: "تغطية المسؤولية المهنية حتى 600,000 ريال", price: 0, included: true },
      { id: "mal-f5-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f5-3", content: "تغطية التعويضات المالية للمرضى", price: 250, included: false },
      { id: "mal-f5-4", content: "تغطية فقدان الدخل أثناء التحقيق", price: 400, included: false },
    ],
    expenses: [
      { id: "mal-e5-1", reason: "ضريبة القيمة المضافة (15%)", price: 202.50 },
    ],
  },
  {
    id: "mal-006",
    companyName: "بروج",
    companyLogo: "https://github.com/user-attachments/assets/75e4854c-72ef-4dfc-a8bd-09bc698b2cdf",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "920.00",
    features: [
      { id: "mal-f6-1", content: "تغطية المسؤولية المهنية حتى 400,000 ريال", price: 0, included: true },
      { id: "mal-f6-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f6-3", content: "تغطية التعويضات المالية للمرضى", price: 190, included: false },
    ],
    expenses: [
      { id: "mal-e6-1", reason: "ضريبة القيمة المضافة (15%)", price: 138.00 },
    ],
  },
  {
    id: "mal-007",
    companyName: "الاتحاد الخليجي",
    companyLogo: "https://github.com/user-attachments/assets/80cd683f-f79d-42ef-931d-e3eb1af5829c",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "780.00",
    features: [
      { id: "mal-f7-1", content: "تغطية المسؤولية المهنية حتى 300,000 ريال", price: 0, included: true },
      { id: "mal-f7-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
    ],
    expenses: [
      { id: "mal-e7-1", reason: "ضريبة القيمة المضافة (15%)", price: 117.00 },
    ],
  },
  {
    id: "mal-008",
    companyName: "أمانة",
    companyLogo: "https://github.com/user-attachments/assets/ced2698b-374c-4a3b-b284-23209d572ced",
    type: "malpractice",
    planName: "تأمين أخطاء طبية",
    mainPrice: "1100.00",
    features: [
      { id: "mal-f8-1", content: "تغطية المسؤولية المهنية حتى 500,000 ريال", price: 0, included: true },
      { id: "mal-f8-2", content: "تغطية المصاريف القانونية", price: 0, included: true },
      { id: "mal-f8-3", content: "تغطية التعويضات المالية للمرضى", price: 210, included: false },
      { id: "mal-f8-4", content: "تغطية فقدان الدخل أثناء التحقيق", price: 330, included: false },
    ],
    expenses: [
      { id: "mal-e8-1", reason: "ضريبة القيمة المضافة (15%)", price: 165.00 },
    ],
  },
];

// ==================== TRAVEL INSURANCE (سفر) ====================
export const travelOfferData: InsuranceOffer[] = [
  {
    id: "trv-001",
    companyName: "التعاونية",
    companyLogo: "https://github.com/user-attachments/assets/2341cefe-8e2c-4c2d-8ec4-3fca8699b4fb",
    type: "travel",
    planName: "تأمين سفر شامل",
    mainPrice: "185.00",
    features: [
      { id: "trv-f1-1", content: "تغطية الطوارئ الطبية حتى 500,000 ريال", price: 0, included: true },
      { id: "trv-f1-2", content: "تغطية إلغاء الرحلة", price: 45, included: false },
      { id: "trv-f1-3", content: "تغطية فقدان الأمتعة حتى 5,000 ريال", price: 30, included: false },
      { id: "trv-f1-4", content: "تغطية تأخير الرحلة", price: 25, included: false },
      { id: "trv-f1-5", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e1-1", reason: "ضريبة القيمة المضافة (15%)", price: 27.75 },
    ],
  },
  {
    id: "trv-002",
    companyName: "تكافل الراجحي",
    companyLogo: "https://github.com/user-attachments/assets/d37d419c-08bf-4211-b20c-7c881c9086d0",
    type: "travel",
    planName: "تأمين سفر أساسي",
    mainPrice: "120.00",
    features: [
      { id: "trv-f2-1", content: "تغطية الطوارئ الطبية حتى 300,000 ريال", price: 0, included: true },
      { id: "trv-f2-2", content: "تغطية إلغاء الرحلة", price: 35, included: false },
      { id: "trv-f2-3", content: "تغطية فقدان الأمتعة حتى 3,000 ريال", price: 25, included: false },
      { id: "trv-f2-4", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e2-1", reason: "ضريبة القيمة المضافة (15%)", price: 18.00 },
    ],
  },
  {
    id: "trv-003",
    companyName: "ميدغلف",
    companyLogo: "https://github.com/user-attachments/assets/b0e744e3-1d0f-4ec0-847f-3ef463aef33c",
    type: "travel",
    planName: "تأمين سفر شامل",
    mainPrice: "210.00",
    features: [
      { id: "trv-f3-1", content: "تغطية الطوارئ الطبية حتى 600,000 ريال", price: 0, included: true },
      { id: "trv-f3-2", content: "تغطية إلغاء الرحلة", price: 50, included: false },
      { id: "trv-f3-3", content: "تغطية فقدان الأمتعة حتى 6,000 ريال", price: 35, included: false },
      { id: "trv-f3-4", content: "تغطية تأخير الرحلة", price: 30, included: false },
      { id: "trv-f3-5", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
      { id: "trv-f3-6", content: "تغطية الإخلاء الطبي الطارئ", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e3-1", reason: "ضريبة القيمة المضافة (15%)", price: 31.50 },
    ],
  },
  {
    id: "trv-004",
    companyName: "سلامة",
    companyLogo: "https://github.com/user-attachments/assets/207354df-0143-4207-b518-7f5bcc323a21",
    type: "travel",
    planName: "تأمين سفر أساسي",
    mainPrice: "95.00",
    features: [
      { id: "trv-f4-1", content: "تغطية الطوارئ الطبية حتى 250,000 ريال", price: 0, included: true },
      { id: "trv-f4-2", content: "تغطية فقدان الأمتعة حتى 2,500 ريال", price: 20, included: false },
      { id: "trv-f4-3", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e4-1", reason: "ضريبة القيمة المضافة (15%)", price: 14.25 },
    ],
  },
  {
    id: "trv-005",
    companyName: "جي آي جي",
    companyLogo: "https://github.com/user-attachments/assets/69d7e375-514a-4843-9964-8700ca28110e",
    type: "travel",
    planName: "تأمين سفر بلاتيني",
    mainPrice: "280.00",
    features: [
      { id: "trv-f5-1", content: "تغطية الطوارئ الطبية حتى 1,000,000 ريال", price: 0, included: true },
      { id: "trv-f5-2", content: "تغطية إلغاء الرحلة", price: 60, included: false },
      { id: "trv-f5-3", content: "تغطية فقدان الأمتعة حتى 8,000 ريال", price: 40, included: false },
      { id: "trv-f5-4", content: "تغطية تأخير الرحلة", price: 35, included: false },
      { id: "trv-f5-5", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
      { id: "trv-f5-6", content: "تغطية الإخلاء الطبي الطارئ", price: 0, included: true },
      { id: "trv-f5-7", content: "تغطية المسؤولية الشخصية", price: 50, included: false },
    ],
    expenses: [
      { id: "trv-e5-1", reason: "ضريبة القيمة المضافة (15%)", price: 42.00 },
    ],
  },
  {
    id: "trv-006",
    companyName: "بروج",
    companyLogo: "https://github.com/user-attachments/assets/75e4854c-72ef-4dfc-a8bd-09bc698b2cdf",
    type: "travel",
    planName: "تأمين سفر شامل",
    mainPrice: "165.00",
    features: [
      { id: "trv-f6-1", content: "تغطية الطوارئ الطبية حتى 400,000 ريال", price: 0, included: true },
      { id: "trv-f6-2", content: "تغطية إلغاء الرحلة", price: 40, included: false },
      { id: "trv-f6-3", content: "تغطية فقدان الأمتعة حتى 4,000 ريال", price: 28, included: false },
      { id: "trv-f6-4", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e6-1", reason: "ضريبة القيمة المضافة (15%)", price: 24.75 },
    ],
  },
  {
    id: "trv-007",
    companyName: "الاتحاد الخليجي",
    companyLogo: "https://github.com/user-attachments/assets/80cd683f-f79d-42ef-931d-e3eb1af5829c",
    type: "travel",
    planName: "تأمين سفر أساسي",
    mainPrice: "85.00",
    features: [
      { id: "trv-f7-1", content: "تغطية الطوارئ الطبية حتى 200,000 ريال", price: 0, included: true },
      { id: "trv-f7-2", content: "تغطية فقدان الأمتعة حتى 2,000 ريال", price: 18, included: false },
      { id: "trv-f7-3", content: "المساعدة على الطريق في الخارج", price: 0, included: true },
    ],
    expenses: [
      { id: "trv-e7-1", reason: "ضريبة القيمة المضافة (15%)", price: 12.75 },
    ],
  },
];

// ==================== DOMESTIC WORKER INSURANCE (العمالة المنزلية) ====================
export const domesticOfferData: InsuranceOffer[] = [
  {
    id: "dom-001",
    companyName: "التعاونية",
    companyLogo: "https://github.com/user-attachments/assets/2341cefe-8e2c-4c2d-8ec4-3fca8699b4fb",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة أ",
    mainPrice: "1850.00",
    features: [
      { id: "dom-f1-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f1-2", content: "تغطية الأسنان حتى 1,500 ريال", price: 200, included: false },
      { id: "dom-f1-3", content: "تغطية النظارات حتى 300 ريال", price: 100, included: false },
      { id: "dom-f1-4", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e1-1", reason: "ضريبة القيمة المضافة (15%)", price: 277.50 },
    ],
  },
  {
    id: "dom-002",
    companyName: "تكافل الراجحي",
    companyLogo: "https://github.com/user-attachments/assets/d37d419c-08bf-4211-b20c-7c881c9086d0",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة ب",
    mainPrice: "1450.00",
    features: [
      { id: "dom-f2-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f2-2", content: "تغطية الأسنان حتى 1,000 ريال", price: 150, included: false },
      { id: "dom-f2-3", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e2-1", reason: "ضريبة القيمة المضافة (15%)", price: 217.50 },
    ],
  },
  {
    id: "dom-003",
    companyName: "ميدغلف",
    companyLogo: "https://github.com/user-attachments/assets/b0e744e3-1d0f-4ec0-847f-3ef463aef33c",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة أ",
    mainPrice: "1680.00",
    features: [
      { id: "dom-f3-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f3-2", content: "تغطية الأسنان حتى 1,200 ريال", price: 180, included: false },
      { id: "dom-f3-3", content: "تغطية النظارات حتى 250 ريال", price: 80, included: false },
      { id: "dom-f3-4", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e3-1", reason: "ضريبة القيمة المضافة (15%)", price: 252.00 },
    ],
  },
  {
    id: "dom-004",
    companyName: "سلامة",
    companyLogo: "https://github.com/user-attachments/assets/207354df-0143-4207-b518-7f5bcc323a21",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة ب",
    mainPrice: "1320.00",
    features: [
      { id: "dom-f4-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f4-2", content: "تغطية الأسنان حتى 800 ريال", price: 120, included: false },
      { id: "dom-f4-3", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e4-1", reason: "ضريبة القيمة المضافة (15%)", price: 198.00 },
    ],
  },
  {
    id: "dom-005",
    companyName: "جي آي جي",
    companyLogo: "https://github.com/user-attachments/assets/69d7e375-514a-4843-9964-8700ca28110e",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة أ+",
    mainPrice: "2100.00",
    features: [
      { id: "dom-f5-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f5-2", content: "تغطية الأسنان حتى 2,000 ريال", price: 250, included: false },
      { id: "dom-f5-3", content: "تغطية النظارات حتى 400 ريال", price: 120, included: false },
      { id: "dom-f5-4", content: "تغطية الأمومة والولادة", price: 500, included: false },
      { id: "dom-f5-5", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e5-1", reason: "ضريبة القيمة المضافة (15%)", price: 315.00 },
    ],
  },
  {
    id: "dom-006",
    companyName: "بروج",
    companyLogo: "https://github.com/user-attachments/assets/75e4854c-72ef-4dfc-a8bd-09bc698b2cdf",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة ب",
    mainPrice: "1250.00",
    features: [
      { id: "dom-f6-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f6-2", content: "تغطية الأسنان حتى 800 ريال", price: 130, included: false },
      { id: "dom-f6-3", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e6-1", reason: "ضريبة القيمة المضافة (15%)", price: 187.50 },
    ],
  },
  {
    id: "dom-007",
    companyName: "أمانة",
    companyLogo: "https://github.com/user-attachments/assets/ced2698b-374c-4a3b-b284-23209d572ced",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة أ",
    mainPrice: "1580.00",
    features: [
      { id: "dom-f7-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f7-2", content: "تغطية الأسنان حتى 1,000 ريال", price: 160, included: false },
      { id: "dom-f7-3", content: "تغطية النظارات حتى 300 ريال", price: 90, included: false },
      { id: "dom-f7-4", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e7-1", reason: "ضريبة القيمة المضافة (15%)", price: 237.00 },
    ],
  },
  {
    id: "dom-008",
    companyName: "الاتحاد الخليجي",
    companyLogo: "https://github.com/user-attachments/assets/80cd683f-f79d-42ef-931d-e3eb1af5829c",
    type: "domestic",
    planName: "تأمين العمالة المنزلية - الفئة ب",
    mainPrice: "1180.00",
    features: [
      { id: "dom-f8-1", content: "تغطية العلاج الداخلي والخارجي", price: 0, included: true },
      { id: "dom-f8-2", content: "تغطية الأسنان حتى 700 ريال", price: 110, included: false },
      { id: "dom-f8-3", content: "شبكة مستشفيات واسعة", price: 0, included: true },
    ],
    expenses: [
      { id: "dom-e8-1", reason: "ضريبة القيمة المضافة (15%)", price: 177.00 },
    ],
  },
];
