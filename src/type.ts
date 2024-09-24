export interface News {
    nid: number;
    ndate: Date;
    ntitle: string;
    ndesc: string;
    ncate: string;
    nkind: number;
    nhit: number;
    images: string[];
}

export interface Customer {
    cid: number; // Optional since it's auto-generated
    cdate: Date; // Use Date for `LocalDateTime`

    username: string;
    enabled: boolean;
    role: string;

    name: string;

    postcode: string;
    caddr: string;
    ctel: string;

    // Exclude from serialization (similar to @ToString.Exclude)
    donation: Donation[];
    answers: Answer[];
    questions: Question[];
}

export interface Child {
    chid: number;
    chdate: Date;        // LocalDateTime handled as a string
    chdob: Date;           // LocalDate mapped to Date
    chname: string;
    chimg: string;
    chgender: string;
    chlocation: string;
    chdesc: string;
    donations: Donation[]; // Assuming Donation is another interface
}

export interface Donation {
    did: number;
    ddate: Date;            // LocalDateTime handled as a string
    donationMethod: string;
    donationAmount: number;
    donationPeriod: number;
    child: Child;             // Assuming Child is another interface
    customer: Customer;       // Assuming Customer is another interface
}

export interface Answer {
    aid: number;
    adate: Date;         // LocalDateTime handled as a string
    content: string;
    aauthor: Customer;     // Assuming Customer is another interface
    questionId: number;
}

export interface Question {
    qid: number;
    qdate: Date;         // LocalDateTime handled as a string
    subject: string;
    content: string;
    qauthor: Customer;     // Assuming Customer is another interface
    answers: Answer[];     // Assuming Answer is another interface
}

export const category={
    "1": "공지사항",
    "2": "기업소식",
    "3": "후원금 사용내역",
    "4": "진행프로젝트",
    "5": "피후원자 추가안내",
    "6": "명예후원자",
    "7": "인재 채용",
    "8": "보도자료"
}