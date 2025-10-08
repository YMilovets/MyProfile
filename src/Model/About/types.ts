export type EnterpriseType = {
  positionDate: [Date, Date];
  teamInfo: string;
  achievements: Array<{ achievementId: string; text: string }>;
  company: "ЕвразТехника";
  id: string;
};

export type EnterprisesType = {
  listEnterprises: Array<EnterpriseType>;
  about?: string;
};