// export const selectLoading = state => state.contacts.loading; //! Ошибка Репеты
export const selectLoadingTransactions = state => state.transactions.isLoading;

export const selectAllTransactions = state => state.transactions.allTransactions;

export const selectBalanceNew = state => state.transactions.balanceNew;
