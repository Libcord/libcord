export const ApplicationCommand = (applicationId: string, commandId: string) =>
  `/applications/${applicationId}/commands/${commandId}`;
export const ApplicationCommands = (applicationId: string) =>
  `/applications/${applicationId}/commands`;
export const ApplicationGuildCommand = (
  applicationId: string,
  commandId: string,
  guildId: string
) => `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
export const ApplicationGuildCommands = (
  applicationId: string,
  guildId: string
) => `/applications/${applicationId}/guilds/${guildId}/commands`;
export const Channel = (channelId: string) => `/channels/${channelId}`;
