export interface News {
    nid: number;
    ndate: Date;
    ntitle: string;
    ndesc: string;
    ncate: string;
    nkind: number;
    nhit: number;
    nimg1: string;
}

export interface Customer {
    cid: number;
    cdate: Date;          // LocalDateTime can be handled as a string in ISO format
    username: string;
    password: string;
    enabled: boolean;
    role: string;
    name: string;
    donation: Donation[];   // Assuming Donation is another interface
    answers: Answer[];      // Assuming Answer is another interface
    questions: Question[];  // Assuming Question is another interface
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
    question: Question;    // Assuming Question is another interface
}

export interface Question {
    qid: number;
    qdate: Date;         // LocalDateTime handled as a string
    subject: string;
    content: string;
    qauthor: Customer;     // Assuming Customer is another interface
    answers: Answer[];     // Assuming Answer is another interface
}