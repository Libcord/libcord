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

export const CrosspostMessage = (channelId: string, messageId: string) =>
  `/channels/${channelId}/messages/${messageId}/crosspost`;
export const PinMessage = (channelId: string, messageId: string) =>
  `/channels/${channelId}/pins/${messageId}`;
export const TypingIndicator = (channelId: string) =>
  `/channels/${channelId}/typing`;
export const SelfMessageReaction = (
  channelId: string,
  messageId: string,
  emojiId: string
) => `/channels/${channelId}/messages/${messageId}/reactions/${emojiId}/@me`;

export const RespondInteraction = (
  interactionId: string,
  interactionToken: string
) => `/interactions/${interactionId}/${interactionToken}/callback`;

export const EditReply = (applicationId: string, interactionToken: string) =>
  `/webhooks/${applicationId}/${interactionToken}/messages/@original`;
