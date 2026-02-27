export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'lender' | 'borrower' | 'analyst';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
}

export interface Loan {
  id: string;
  borrowerId: string;
  borrowerName: string;
  lenderId: string;
  lenderName: string;
  amount: number;
  interestRate: number;
  term: number; // in months
  status: 'pending' | 'approved' | 'active' | 'completed' | 'defaulted' | 'rejected';
  purpose: string;
  startDate: string;
  endDate: string;
  totalRepayment: number;
  monthlyPayment: number;
  paidAmount: number;
  remainingAmount: number;
  creditScore?: number;
  riskLevel?: 'low' | 'medium' | 'high';
}

export interface Payment {
  id: string;
  loanId: string;
  amount: number;
  principal: number;
  interest: number;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  paymentMethod?: string;
}

export interface Transaction {
  id: string;
  loanId: string;
  type: 'disbursement' | 'payment' | 'fee' | 'penalty';
  amount: number;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'failed';
}

// Mock users
export const mockUsers: User[] = [
  { id: 'U001', name: 'Admin User', email: 'admin@loanapp.com', role: 'admin', status: 'active', createdAt: '2024-01-01' },
  { id: 'U002', name: 'Sarah Johnson', email: 'sarah.j@email.com', role: 'lender', status: 'active', createdAt: '2024-02-15' },
  { id: 'U003', name: 'Michael Chen', email: 'michael.c@email.com', role: 'borrower', status: 'active', createdAt: '2024-03-10' },
  { id: 'U004', name: 'Emma Davis', email: 'emma.d@email.com', role: 'lender', status: 'active', createdAt: '2024-02-20' },
  { id: 'U005', name: 'James Wilson', email: 'james.w@email.com', role: 'borrower', status: 'active', createdAt: '2024-04-05' },
  { id: 'U006', name: 'Robert Smith', email: 'robert.s@email.com', role: 'analyst', status: 'active', createdAt: '2024-01-10' },
  { id: 'U007', name: 'Lisa Anderson', email: 'lisa.a@email.com', role: 'borrower', status: 'active', createdAt: '2024-05-12' },
  { id: 'U008', name: 'David Brown', email: 'david.b@email.com', role: 'lender', status: 'active', createdAt: '2024-03-01' },
];

// Mock loans
export const mockLoans: Loan[] = [
  {
    id: 'L001',
    borrowerId: 'U003',
    borrowerName: 'Michael Chen',
    lenderId: 'U002',
    lenderName: 'Sarah Johnson',
    amount: 50000,
    interestRate: 8.5,
    term: 36,
    status: 'active',
    purpose: 'Business Expansion',
    startDate: '2024-06-01',
    endDate: '2027-06-01',
    totalRepayment: 58275,
    monthlyPayment: 1619,
    paidAmount: 12952,
    remainingAmount: 45323,
    creditScore: 720,
    riskLevel: 'low',
  },
  {
    id: 'L002',
    borrowerId: 'U005',
    borrowerName: 'James Wilson',
    lenderId: 'U004',
    lenderName: 'Emma Davis',
    amount: 25000,
    interestRate: 10.0,
    term: 24,
    status: 'active',
    purpose: 'Home Renovation',
    startDate: '2025-01-01',
    endDate: '2027-01-01',
    totalRepayment: 28050,
    monthlyPayment: 1169,
    paidAmount: 2338,
    remainingAmount: 25712,
    creditScore: 680,
    riskLevel: 'medium',
  },
  {
    id: 'L003',
    borrowerId: 'U007',
    borrowerName: 'Lisa Anderson',
    lenderId: 'U008',
    lenderName: 'David Brown',
    amount: 15000,
    interestRate: 7.5,
    term: 12,
    status: 'active',
    purpose: 'Debt Consolidation',
    startDate: '2025-06-01',
    endDate: '2026-06-01',
    totalRepayment: 15675,
    monthlyPayment: 1306,
    paidAmount: 9144,
    remainingAmount: 6531,
    creditScore: 750,
    riskLevel: 'low',
  },
  {
    id: 'L004',
    borrowerId: 'U003',
    borrowerName: 'Michael Chen',
    lenderId: 'U004',
    lenderName: 'Emma Davis',
    amount: 30000,
    interestRate: 12.0,
    term: 18,
    status: 'pending',
    purpose: 'Equipment Purchase',
    startDate: '2026-03-01',
    endDate: '2027-09-01',
    totalRepayment: 33900,
    monthlyPayment: 1883,
    paidAmount: 0,
    remainingAmount: 33900,
    creditScore: 720,
    riskLevel: 'medium',
  },
  {
    id: 'L005',
    borrowerId: 'U005',
    borrowerName: 'James Wilson',
    lenderId: 'U002',
    lenderName: 'Sarah Johnson',
    amount: 75000,
    interestRate: 9.0,
    term: 60,
    status: 'approved',
    purpose: 'Property Investment',
    startDate: '2026-03-01',
    endDate: '2031-03-01',
    totalRepayment: 93750,
    monthlyPayment: 1563,
    paidAmount: 0,
    remainingAmount: 93750,
    creditScore: 680,
    riskLevel: 'medium',
  },
  {
    id: 'L006',
    borrowerId: 'U007',
    borrowerName: 'Lisa Anderson',
    lenderId: 'U002',
    lenderName: 'Sarah Johnson',
    amount: 10000,
    interestRate: 6.5,
    term: 24,
    status: 'completed',
    purpose: 'Education',
    startDate: '2024-01-01',
    endDate: '2026-01-01',
    totalRepayment: 10700,
    monthlyPayment: 446,
    paidAmount: 10700,
    remainingAmount: 0,
    creditScore: 750,
    riskLevel: 'low',
  },
];

// Mock payments
export const mockPayments: Payment[] = [
  { id: 'P001', loanId: 'L001', amount: 1619, principal: 1260, interest: 359, date: '2024-07-01', dueDate: '2024-07-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P002', loanId: 'L001', amount: 1619, principal: 1269, interest: 350, date: '2024-08-01', dueDate: '2024-08-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P003', loanId: 'L001', amount: 1619, principal: 1278, interest: 341, date: '2024-09-01', dueDate: '2024-09-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P004', loanId: 'L001', amount: 1619, principal: 1287, interest: 332, date: '2024-10-01', dueDate: '2024-10-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P005', loanId: 'L001', amount: 1619, principal: 1296, interest: 323, date: '2024-11-01', dueDate: '2024-11-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P006', loanId: 'L001', amount: 1619, principal: 1305, interest: 314, date: '2024-12-01', dueDate: '2024-12-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P007', loanId: 'L001', amount: 1619, principal: 1314, interest: 305, date: '2025-01-01', dueDate: '2025-01-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P008', loanId: 'L001', amount: 1619, principal: 1323, interest: 296, date: '2025-02-01', dueDate: '2025-02-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P009', loanId: 'L001', amount: 0, principal: 0, interest: 0, date: '', dueDate: '2025-03-01', status: 'pending' },
  { id: 'P010', loanId: 'L001', amount: 0, principal: 0, interest: 0, date: '', dueDate: '2025-04-01', status: 'pending' },
  
  { id: 'P011', loanId: 'L002', amount: 1169, principal: 960, interest: 209, date: '2025-02-01', dueDate: '2025-02-01', status: 'paid', paymentMethod: 'Credit Card' },
  { id: 'P012', loanId: 'L002', amount: 1169, principal: 968, interest: 201, date: '2025-03-01', dueDate: '2025-03-01', status: 'paid', paymentMethod: 'Credit Card' },
  { id: 'P013', loanId: 'L002', amount: 0, principal: 0, interest: 0, date: '', dueDate: '2025-04-01', status: 'pending' },
  
  { id: 'P014', loanId: 'L003', amount: 1306, principal: 1212, interest: 94, date: '2025-07-01', dueDate: '2025-07-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P015', loanId: 'L003', amount: 1306, principal: 1220, interest: 86, date: '2025-08-01', dueDate: '2025-08-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P016', loanId: 'L003', amount: 1306, principal: 1227, interest: 79, date: '2025-09-01', dueDate: '2025-09-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P017', loanId: 'L003', amount: 1306, principal: 1235, interest: 71, date: '2025-10-01', dueDate: '2025-10-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P018', loanId: 'L003', amount: 1306, principal: 1242, interest: 64, date: '2025-11-01', dueDate: '2025-11-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P019', loanId: 'L003', amount: 1306, principal: 1250, interest: 56, date: '2025-12-01', dueDate: '2025-12-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P020', loanId: 'L003', amount: 1306, principal: 1258, interest: 48, date: '2026-01-01', dueDate: '2026-01-01', status: 'paid', paymentMethod: 'Bank Transfer' },
  { id: 'P021', loanId: 'L003', amount: 0, principal: 0, interest: 0, date: '', dueDate: '2026-02-01', status: 'overdue' },
];

// Mock transactions
export const mockTransactions: Transaction[] = [
  { id: 'T001', loanId: 'L001', type: 'disbursement', amount: 50000, date: '2024-06-01', description: 'Loan disbursement to Michael Chen', status: 'completed' },
  { id: 'T002', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-07-01', description: 'Monthly payment #1', status: 'completed' },
  { id: 'T003', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-08-01', description: 'Monthly payment #2', status: 'completed' },
  { id: 'T004', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-09-01', description: 'Monthly payment #3', status: 'completed' },
  { id: 'T005', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-10-01', description: 'Monthly payment #4', status: 'completed' },
  { id: 'T006', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-11-01', description: 'Monthly payment #5', status: 'completed' },
  { id: 'T007', loanId: 'L001', type: 'payment', amount: 1619, date: '2024-12-01', description: 'Monthly payment #6', status: 'completed' },
  { id: 'T008', loanId: 'L001', type: 'payment', amount: 1619, date: '2025-01-01', description: 'Monthly payment #7', status: 'completed' },
  { id: 'T009', loanId: 'L001', type: 'payment', amount: 1619, date: '2025-02-01', description: 'Monthly payment #8', status: 'completed' },
  
  { id: 'T010', loanId: 'L002', type: 'disbursement', amount: 25000, date: '2025-01-01', description: 'Loan disbursement to James Wilson', status: 'completed' },
  { id: 'T011', loanId: 'L002', type: 'payment', amount: 1169, date: '2025-02-01', description: 'Monthly payment #1', status: 'completed' },
  { id: 'T012', loanId: 'L002', type: 'payment', amount: 1169, date: '2025-03-01', description: 'Monthly payment #2', status: 'completed' },
  
  { id: 'T013', loanId: 'L003', type: 'disbursement', amount: 15000, date: '2025-06-01', description: 'Loan disbursement to Lisa Anderson', status: 'completed' },
  { id: 'T014', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-07-01', description: 'Monthly payment #1', status: 'completed' },
  { id: 'T015', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-08-01', description: 'Monthly payment #2', status: 'completed' },
  { id: 'T016', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-09-01', description: 'Monthly payment #3', status: 'completed' },
  { id: 'T017', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-10-01', description: 'Monthly payment #4', status: 'completed' },
  { id: 'T018', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-11-01', description: 'Monthly payment #5', status: 'completed' },
  { id: 'T019', loanId: 'L003', type: 'payment', amount: 1306, date: '2025-12-01', description: 'Monthly payment #6', status: 'completed' },
  { id: 'T020', loanId: 'L003', type: 'payment', amount: 1306, date: '2026-01-01', description: 'Monthly payment #7', status: 'completed' },
  { id: 'T021', loanId: 'L003', type: 'penalty', amount: 50, date: '2026-02-05', description: 'Late payment fee', status: 'completed' },
  
  { id: 'T022', loanId: 'L006', type: 'disbursement', amount: 10000, date: '2024-01-01', description: 'Loan disbursement to Lisa Anderson', status: 'completed' },
];

// Analytics data
export const getLoanAnalytics = () => {
  const totalLoans = mockLoans.length;
  const activeLoans = mockLoans.filter(l => l.status === 'active').length;
  const totalDisbursed = mockLoans.reduce((sum, loan) => sum + loan.amount, 0);
  const totalCollected = mockLoans.reduce((sum, loan) => sum + loan.paidAmount, 0);
  const totalOutstanding = mockLoans.reduce((sum, loan) => sum + loan.remainingAmount, 0);
  
  return {
    totalLoans,
    activeLoans,
    totalDisbursed,
    totalCollected,
    totalOutstanding,
    averageLoanSize: totalDisbursed / totalLoans,
    collectionRate: (totalCollected / totalDisbursed) * 100,
  };
};

export const getMonthlyData = () => {
  return [
    { month: 'Sep 25', disbursed: 0, collected: 3925, outstanding: 71623 },
    { month: 'Oct 25', disbursed: 0, collected: 3925, outstanding: 67698 },
    { month: 'Nov 25', disbursed: 0, collected: 3925, outstanding: 63773 },
    { month: 'Dec 25', disbursed: 0, collected: 3925, outstanding: 59848 },
    { month: 'Jan 26', disbursed: 25000, collected: 2619, outstanding: 82229 },
    { month: 'Feb 26', disbursed: 0, collected: 4094, outstanding: 78135 },
  ];
};

export const getRiskDistribution = () => {
  const riskCounts = mockLoans.reduce((acc, loan) => {
    if (loan.riskLevel) {
      acc[loan.riskLevel] = (acc[loan.riskLevel] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(riskCounts).map(([name, value]) => ({ name, value }));
};

export const getLoansByStatus = () => {
  const statusCounts = mockLoans.reduce((acc, loan) => {
    acc[loan.status] = (acc[loan.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
};
