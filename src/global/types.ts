export interface TransactionCardProps {
    transactionType: 'entry' | 'out';
    name: string;
    amount: string;
    date: string;
    category: {
        name: string;
        key: string;
        icon: string;
    };
}