/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
export type AutheticationStackParamList = {
  Login:undefined,
  RecentTransaction:undefined,
}
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Payment: undefined;
  Expense: undefined;
  Transactions: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  TabOneScreen: undefined;
};

export type PaymentParamList = {
  TabTwoScreen: undefined;
};
export type ExpenseParamList = {
  TabThreeScreen: undefined;
};

export type TransactionsParamList = {
  TabFourScreen: undefined;
};
export type ProfileParamList = {
  TabFiveScreen: undefined;
};
