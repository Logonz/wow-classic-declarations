declare interface QuestObjectiveInfo {
  text: string;
  type: string;
  finished: boolean;
  numFulfilled: number;
  numRequired: number;
}

declare namespace C_QuestLog {
  /**
   * This is the maximum number of quests a player can be on, including hidden quests, world quests, emissaries etc.
   * @return maxNumQuests - The maximum number of quests a player can be on
   * @see https://wow.gamepedia.com/API_C_QuestLog.GetMaxNumQuests
   */
  function GetMaxNumQuests(): number;

  /**
   * This is the maximum number of standard quests a player can accept. These are quests that are normally visible in the quest log.
   * @return maxNumQuestsCanAccept - The maximum number of standard quests a player can accept
   * @see https://wow.gamepedia.com/API_C_QuestLog.GetMaxNumQuestsCanAccept
   */
  function GetMaxNumQuestsCanAccept(): number;

  /**
   * Get the quest title for a given questID.
   * @param questID - The quest ID
   * @return title - The quest title
   * @see https://wow.gamepedia.com/API_C_QuestLog.GetQuestInfo
   */
  function GetQuestInfo(questID: number): string;

  /**
   * Get the objectives for a given questID.
   * @param questID - The quest ID
   * @return objectives - An array of QuestObjectiveInfo objects
   * @see https://wow.gamepedia.com/API_C_QuestLog.GetQuestObjectives
   */
  function GetQuestObjectives(questID: number): QuestObjectiveInfo[];

  /**
   * Check if the player is currently on a given quest.
   * @param questID - The quest ID
   * @return isOnQuest - true if the player is on the quest, false otherwise
   * @see https://wow.gamepedia.com/API_C_QuestLog.IsOnQuest
   */
  function IsOnQuest(questID: number): boolean;

  /**
   * Check if a given quest is flagged as completed.
   * @param questID - The quest ID
   * @return isCompleted - true if the quest is flagged as completed, false otherwise
   * @see https://wow.gamepedia.com/API_C_QuestLog.IsQuestFlaggedCompleted
   */
  function IsQuestFlaggedCompleted(questID: number): boolean;

  /**
   * Check if the quest rewards should be shown for a given quest.
   * @param questID - The quest ID
   * @return shouldShow - true if the quest rewards should be shown, false otherwise
   * @see https://wow.gamepedia.com/API_C_QuestLog.ShouldShowQuestRewards
   */
  function ShouldShowQuestRewards(questID: number): boolean;
}
