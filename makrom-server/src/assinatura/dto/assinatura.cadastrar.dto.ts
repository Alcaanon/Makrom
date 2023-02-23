export class AssinaturaCadastrarDto{
    customer: string;
    billingType: {
        boleto: string,
        credit_card: string,
        pix: string,
        undefined: string
    }
    value: number;
    nextDueDate: string;
    discount: {
        value: number;
        dueDateLimitDays: number;
        type: {
            fixed: string;
            percentage: string
        }
    }
    interest: {
        value: number;
    }
    fine: {
        value: number;
    }
    cycle: {
        weekly: string;
        biweekly: string;
        monthly: string;
        quarterly: string;
        semiannually: string;
        yearly: string;
    }
    description: string;
    endDate: string;
    maxPayments: string;
    externalReference: string;
    split: {
        walletid: string;
        fixedValue: number;
        percentualValue: number;
    }
}