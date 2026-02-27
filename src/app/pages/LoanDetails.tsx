import { useParams, Link } from "react-router";
import DashboardLayout from "../components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowLeft, DollarSign, Calendar, TrendingUp, FileText, CreditCard } from "lucide-react";
import { mockLoans, mockPayments, mockTransactions } from "../data/mockData";

export default function LoanDetails() {
  const { id } = useParams();
  const loan = mockLoans.find(l => l.id === id);
  const payments = mockPayments.filter(p => p.loanId === id);
  const transactions = mockTransactions.filter(t => t.loanId === id);

  if (!loan) {
    return (
      <DashboardLayout title="Loan Details" roleColor="text-gray-600">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan Not Found</h2>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const progress = (loan.paidAmount / loan.totalRepayment) * 100;

  return (
    <DashboardLayout title="Loan Details" roleColor="text-blue-600">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{loan.purpose}</h1>
              <p className="text-gray-600">Loan ID: {loan.id}</p>
            </div>
          </div>
          <Badge variant={
            loan.status === 'active' ? 'default' :
            loan.status === 'completed' ? 'secondary' :
            loan.status === 'pending' ? 'outline' : 'default'
          } className="text-lg px-4 py-2">
            {loan.status}
          </Badge>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Loan Amount
              </CardTitle>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${loan.amount.toLocaleString()}</div>
              <p className="text-xs text-gray-600 mt-1">Principal amount</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Interest Rate
              </CardTitle>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loan.interestRate}%</div>
              <p className="text-xs text-gray-600 mt-1">Annual percentage</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Monthly Payment
              </CardTitle>
              <CreditCard className="w-5 h-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${loan.monthlyPayment.toLocaleString()}</div>
              <p className="text-xs text-gray-600 mt-1">{loan.term} months term</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Remaining Balance
              </CardTitle>
              <DollarSign className="w-5 h-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${loan.remainingAmount.toLocaleString()}</div>
              <p className="text-xs text-gray-600 mt-1">Out of ${loan.totalRepayment.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Repayment Progress</CardTitle>
              <CardDescription>Track your loan repayment journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm font-semibold">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Amount Paid</p>
                    <p className="text-xl font-bold text-green-600">${loan.paidAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Amount Remaining</p>
                    <p className="text-xl font-bold text-orange-600">${loan.remainingAmount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payments Made</p>
                    <p className="text-lg font-semibold">
                      {payments.filter(p => p.status === 'paid').length} of {loan.term}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payments Remaining</p>
                    <p className="text-lg font-semibold">
                      {loan.term - payments.filter(p => p.status === 'paid').length}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loan Information</CardTitle>
              <CardDescription>Key details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Borrower</p>
                  <p className="font-semibold">{loan.borrowerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Lender</p>
                  <p className="font-semibold">{loan.lenderName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Start Date</p>
                  <p className="font-semibold">{new Date(loan.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">End Date</p>
                  <p className="font-semibold">{new Date(loan.endDate).toLocaleDateString()}</p>
                </div>
                {loan.creditScore && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Credit Score</p>
                    <p className="font-semibold">{loan.creditScore}</p>
                  </div>
                )}
                {loan.riskLevel && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Risk Level</p>
                    <Badge className={
                      loan.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                      loan.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {loan.riskLevel}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Payments and Transactions */}
        <Tabs defaultValue="payments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="payments">
              <Calendar className="w-4 h-4 mr-2" />
              Payment Schedule
            </TabsTrigger>
            <TabsTrigger value="transactions">
              <FileText className="w-4 h-4 mr-2" />
              Transaction History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
                <CardDescription>Detailed breakdown of all scheduled and completed payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment #</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Principal</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((payment, index) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">#{index + 1}</TableCell>
                        <TableCell>{new Date(payment.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {payment.amount > 0 ? `$${payment.amount.toLocaleString()}` : `$${loan.monthlyPayment.toLocaleString()}`}
                        </TableCell>
                        <TableCell>${payment.principal.toLocaleString()}</TableCell>
                        <TableCell>${payment.interest.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={
                            payment.status === 'paid' ? 'default' :
                            payment.status === 'overdue' ? 'destructive' : 'outline'
                          }>
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {payment.date ? new Date(payment.date).toLocaleDateString() : '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Complete record of all loan-related transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            transaction.type === 'disbursement' ? 'bg-blue-50 text-blue-700' :
                            transaction.type === 'payment' ? 'bg-green-50 text-green-700' :
                            transaction.type === 'penalty' ? 'bg-red-50 text-red-700' :
                            'bg-gray-50 text-gray-700'
                          }>
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell className="font-semibold">
                          {transaction.type === 'disbursement' ? '+' : '-'}${transaction.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant={transaction.status === 'completed' ? 'default' : 'outline'}>
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
