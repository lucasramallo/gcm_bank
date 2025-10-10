    export async function simulateLogin(email: string, password: string) {
  // Simula chamada API para autenticação
  await new Promise(resolve => setTimeout(resolve, 1000)); // Delay fake
  return { message: 'Login bem-sucedido! Token: fake-token-123' };
}

export async function simulateTransfer(amount: number, toAccount: string) {
  // Simula chamada API para transferências
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: `Transferência de R$${amount} para ${toAccount} concluída!` };
}

export async function simulatePayment(billId: string, amount: number) {
  // Simula chamada API para pagamentos
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: `Pagamento de R$${amount} para conta ${billId} concluído!` };
}

export async function simulateFetchNotifications() {
  // Simula chamada API para notificações
  await new Promise(resolve => setTimeout(resolve, 1000));
  return ['Notificação 1: Transferência recebida', 'Notificação 2: Conta paga'];
}