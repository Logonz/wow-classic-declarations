declare enum AddSoulbindConduitReason {
  None = 0,
  Cheat = 1,
  SpellEffect = 2,
  Upgrade = 3,
}
declare enum AnimaDiversionNodeState {
  Unavailable = 0,
  Available = 1,
  SelectedTemporary = 2,
  SelectedPermanent = 3,
  Cooldown = 4,
}
declare enum AuctionHouseCommoditySortOrder {
  UnitPrice = 0,
  Quantity = 1,
}
declare enum AuctionHouseError {
  NotEnoughMoney = 0,
  HigherBid = 1,
  BidIncrement = 2,
  BidOwn = 3,
  ItemNotFound = 4,
  RestrictedAccountTrial = 5,
  HasRestriction = 6,
  IsBusy = 7,
  Unavailable = 8,
  ItemHasQuote = 9,
  DatabaseError = 10,
  MinBid = 11,
  NotEnoughItems = 12,
  RepairItem = 13,
  UsedCharges = 14,
  QuestItem = 15,
  BoundItem = 16,
  ConjuredItem = 17,
  LimitedDurationItem = 18,
  IsBag = 19,
  EquippedBag = 20,
  WrappedItem = 21,
  LootItem = 22,
  DoubleBid = 23,
  FavoritesMaxed = 24,
  ItemNotAvailable = 25,
}
declare enum AuctionHouseFilter {
  None = 0,
  UncollectedOnly = 1,
  UsableOnly = 2,
  UpgradesOnly = 3,
  ExactMatch = 4,
  PoorQuality = 5,
  CommonQuality = 6,
  UncommonQuality = 7,
  RareQuality = 8,
  EpicQuality = 9,
  LegendaryQuality = 10,
  ArtifactQuality = 11,
  LegendaryCraftedItemOnly = 12,
}
declare enum AuctionHouseFilterCategory {
  Uncategorized = 0,
  Equipment = 1,
  Rarity = 2,
}
declare enum AuctionHouseItemSortOrder {
  Bid = 0,
  Buyout = 1,
}
declare enum AuctionHouseNotification {
  BidPlaced = 0,
  AuctionRemoved = 1,
  AuctionWon = 2,
  AuctionOutbid = 3,
  AuctionSold = 4,
  AuctionExpired = 5,
}
declare enum AuctionHouseSortOrder {
  Price = 0,
  Name = 1,
  Level = 2,
  Bid = 3,
  Buyout = 4,
  TimeRemaining = 5,
}
declare enum AuctionHouseTimeLeftBand {
  Short = 0,
  Medium = 1,
  Long = 2,
  VeryLong = 3,
}
declare enum AuctionStatus {
  Active = 0,
  Sold = 1,
}
declare enum AzeriteEssenceSlot {
  MainSlot = 0,
  PassiveOneSlot = 1,
  PassiveTwoSlot = 2,
  PassiveThreeSlot = 3,
}
declare enum AzeritePowerLevel {
  Base = 0,
  Upgraded = 1,
  Downgraded = 2,
}
declare enum BattlePetAbilityFlag {
  DisplayAsHostileDebuff = 1,
  HideStrongWeakHints = 2,
  Passive = 4,
  ServerOnlyAura = 8,
  ShowCast = 16,
  StartOnCooldown = 32,
}
declare enum BattlePetAbilitySlot {
  A = 0,
  B = 1,
  C = 2,
}
declare enum BattlePetAbilityTargets {
  EnemyFrontPet = 0,
  FriendlyFrontPet = 1,
  Weather = 2,
  EnemyPad = 3,
  FriendlyPad = 4,
  EnemyBackPet_1 = 5,
  EnemyBackPet_2 = 6,
  FriendlyBackPet_1 = 7,
  FriendlyBackPet_2 = 8,
  Caster = 9,
  Owner = 10,
  Specific = 11,
  ProcTarget = 12,
}
declare enum BattlePetAbilityTurnFlag {
  CanProcFromProc = 1,
  TriggerBySelf = 2,
  TriggerByFriend = 4,
  TriggerByEnemy = 8,
  TriggerByWeather = 16,
  TriggerByAuraCaster = 32,
}
declare enum BattlePetAbilityTurnType {
  Normal = 0,
  TriggeredEffect = 1,
}
declare enum BattlePetAbilityType {
  Ability = 0,
  Aura = 1,
}
declare enum BattlePetAction {
  None = 0,
  Ability = 1,
  SwitchPet = 2,
  Trap = 3,
  Skip = 4,
}
declare enum BattlePetBreedQuality {
  Poor = 0,
  Common = 1,
  Uncommon = 2,
  Rare = 3,
  Epic = 4,
  Legendary = 5,
}
declare enum BattlePetEffectFlags {
  EnableAbilityPicker = 1,
  LuaNeedsAllPets = 2,
}
declare enum BattlePetEffectParamType {
  Int = 0,
  Ability = 1,
}
declare enum BattlePetEvent {
  OnAuraApplied = 0,
  OnDamageTaken = 1,
  OnDamageDealt = 2,
  OnHealTaken = 3,
  OnHealDealt = 4,
  OnAuraRemoved = 5,
  OnRoundStart = 6,
  OnRoundEnd = 7,
  OnTurn = 8,
  OnAbility = 9,
  OnSwapIn = 10,
  OnSwapOut = 11,
  PostAuraTicks = 12,
}
declare enum BattlePetNpcEmote {
  BattleUnused = 0,
  BattleStart = 1,
  BattleWin = 2,
  BattleLose = 3,
  PetSwap = 4,
  PetKill = 5,
  PetDie = 6,
  PetAbility = 7,
}
declare enum BattlePetNpcTeamFlag {
  MatchPlayerHighPetLevel = 1,
  NoPlayerXP = 2,
}
declare enum BattlePetOwner {
  Weather = 0,
  Ally = 1,
  Enemy = 2,
}
declare enum BattlePetSources {
  Drop = 0,
  Quest = 1,
  Vendor = 2,
  Profession = 3,
  WildPet = 4,
  Achievement = 5,
  WorldEvent = 6,
  Promotion = 7,
  Tcg = 8,
  PetStore = 9,
  Discovery = 10,
}
declare enum BattlePetSpeciesFlags {
  NoRename = 1,
  WellKnown = 2,
  NotAcccountwide = 4,
  Capturable = 8,
  NotTradable = 16,
  HideFromJournal = 32,
  LegacyAccountUnique = 64,
  CantBattle = 128,
  HordeOnly = 256,
  AllianceOnly = 512,
  Boss = 1024,
  RandomDisplay = 2048,
  NoLicenseRequired = 4096,
  AddsAllowedWithBoss = 8192,
  HideUntilLearned = 16384,
  MatchPlayerHighPetLevel = 32768,
}
declare enum BattlePetStateFlag {
  None = 0,
  SwapOutLock = 1,
  TurnLock = 2,
  SpeedBonus = 4,
  Client = 8,
  MaxHealthBonus = 16,
  Stamina = 32,
  QualityDoesNotEffect = 64,
  DynamicScaling = 128,
  Power = 256,
  SpeedMult = 512,
  SwapInLock = 1024,
  ServerOnly = 2048,
}
declare enum BattlePetTypes {
  Humanoid = 0,
  Dragonkin = 1,
  Flying = 2,
  Undead = 3,
  Critter = 4,
  Magic = 5,
  Elemental = 6,
  Beast = 7,
  Aquatic = 8,
  Mechanical = 9,
}
declare enum BattlePetVisualFlag {
  Test1 = 1,
  Test2 = 2,
  Test3 = 4,
}
declare enum BattlePetVisualRange {
  Melee = 0,
  Ranged = 1,
  InPlace = 2,
  PointBlank = 3,
  BehindMelee = 4,
  BehindRanged = 5,
}
declare enum BattlepetDbFlags {
  None = 0,
  Favorite = 1,
  Converted = 2,
  Revoked = 4,
  LockedForConvert = 8,
  LockMask = 12,
  Ability0Selection = 16,
  Ability1Selection = 32,
  Ability2Selection = 64,
  FanfareNeeded = 128,
  DisplayOverridden = 256,
}
declare enum BattlepetDeletedReason {
  Unknown = 0,
  PlayerReleased = 1,
  PlayerCaged = 2,
  Gm = 3,
  CageError = 4,
  DelJournal = 5,
}
declare enum BattlepetSlotLockCheat {
  Cheat_2_Locked = -3,
  Cheat_1_Locked = -2,
  Cheat_0_Locked = -1,
  CheatOff = 0,
  UnlockAll = 1,
}
declare enum BrawlType {
  None = 0,
  Battleground = 1,
  Arena = 2,
  LFG = 3,
  SoloShuffle = 4,
}
declare enum CachedRewardType {
  None = 0,
  Item = 1,
  Currency = 2,
  Quest = 3,
}
declare enum CalendarCommandType {
  Create = 0,
  Invite = 1,
  Rsvp = 2,
  RemoveInvite = 3,
  RemoveEvent = 4,
  Status = 5,
  ModeratorStatus = 6,
  GetCalendar = 7,
  GetEvent = 8,
  UpdateEvent = 9,
  Complain = 10,
  Notes = 11,
}
declare enum CalendarErrorType {
  Success = 0,
  CommunityEventsExceeded = 1,
  EventsExceeded = 2,
  SelfInvitesExceeded = 3,
  OtherInvitesExceeded = 4,
  NoPermission = 5,
  EventInvalid = 6,
  NotInvited = 7,
  UnknownError = 8,
  NotInGuild = 9,
  NotInCommunity = 10,
  TargetAlreadyInvited = 11,
  NameNotFound = 12,
  WrongFaction = 13,
  Ignored = 14,
  InvitesExceeded = 15,
  InvalidMaxSize = 16,
  InvalidDate = 17,
  InvalidTime = 18,
  NoInvites = 19,
  NeedsTitle = 20,
  EventPassed = 21,
  EventLocked = 22,
  DeleteCreatorFailed = 23,
  DataAlreadySet = 24,
  CalendarDisabled = 25,
  RestrictedAccount = 26,
  ArenaEventsExceeded = 27,
  RestrictedLevel = 28,
  Squelched = 29,
  NoInvite = 30,
  ComplaintDisabled = 31,
  ComplaintSelf = 32,
  ComplaintSameGuild = 33,
  ComplaintGm = 34,
  ComplaintLimit = 35,
  ComplaintNotFound = 36,
  EventWrongServer = 37,
  NoCommunityInvites = 38,
  InvalidSignup = 39,
  NoModerator = 40,
  ModeratorRestricted = 41,
  InvalidNotes = 42,
  InvalidTitle = 43,
  InvalidDescription = 44,
  InvalidClub = 45,
  CreatorNotFound = 46,
  EventThrottled = 47,
  InviteThrottled = 48,
  Internal = 49,
  ComplaintAdded = 50,
}
declare enum CalendarEventBits {
  Player = 1,
  GuildDeprecated = 2,
  System = 4,
  Holiday = 8,
  Locked = 16,
  AutoApprove = 32,
  CommunityAnnouncement = 64,
  RaidLockout = 128,
  ArenaDeprecated = 256,
  RaidResetDeprecated = 512,
  CommunitySignup = 1024,
  GuildSignup = 2048,
  CommunityWide = 3136,
  PlayerCreated = 3395,
  CantComplain = 3788,
}
declare enum CalendarEventRepeatOptions {
  Never = 0,
  Weekly = 1,
  Biweekly = 2,
  Monthly = 3,
}
declare enum CalendarEventType {
  Raid = 0,
  Dungeon = 1,
  PvP = 2,
  Meeting = 3,
  Other = 4,
  HeroicDeprecated = 5,
}
declare enum CalendarFilterFlags {
  WeeklyHoliday = 1,
  Darkmoon = 2,
  Battleground = 4,
  RaidLockout = 8,
  RaidReset = 16,
}
declare enum CalendarGetEventType {
  Get = 0,
  Add = 1,
  Copy = 2,
}
declare enum CalendarHolidayFilterType {
  Weekly = 0,
  Darkmoon = 1,
  Battleground = 2,
}
declare enum CalendarInviteBits {
  PendingInvite = 1,
  Moderator = 2,
  Creator = 4,
  Signup = 8,
}
declare enum CalendarInviteSortType {
  Name = 0,
  Level = 1,
  Class = 2,
  Status = 3,
  Party = 4,
  Notes = 5,
}
declare enum CalendarInviteType {
  Normal = 0,
  Signup = 1,
}
declare enum CalendarModeratorStatus {
  None = 0,
  Moderator = 1,
  Creator = 2,
}
declare enum CalendarStatus {
  Invited = 0,
  Available = 1,
  Declined = 2,
  Confirmed = 3,
  Out = 4,
  Standby = 5,
  Signedup = 6,
  NotSignedup = 7,
  Tentative = 8,
}
declare enum CalendarTexturesType {
  Dungeons = 0,
  Raid = 1,
}
declare enum CalendarType {
  Player = 0,
  Community = 1,
  RaidLockout = 2,
  RaidResetDeprecated = 3,
  Holiday = 4,
  HolidayWeekly = 5,
  HolidayDarkmoon = 6,
  HolidayBattleground = 7,
}
declare enum CalendarWebActionType {
  Accept = 0,
  Decline = 1,
  Remove = 2,
  ReportSpam = 3,
  Signup = 4,
  Tentative = 5,
  TentativeSignup = 6,
}
declare enum CallingStates {
  QuestOffer = 0,
  QuestActive = 1,
  QuestCompleted = 2,
}
declare enum CampaignState {
  Invalid = 0,
  Complete = 1,
  InProgress = 2,
  Stalled = 3,
}
declare enum CaptureBarWidgetFillDirectionType {
  RightToLeft = 0,
  LeftToRight = 1,
}
declare enum CaptureBarWidgetGlowAnimType {
  None = 0,
  Pulse = 1,
}
declare enum CharacterServiceInfoFlag {
  RestrictToRecommendedSpecs = 1,
}
declare enum ChatChannelRuleset {
  None = 0,
  Mentor = 1,
  Disabled = 2,
  ChromieTimeCataclysm = 3,
  ChromieTimeBuringCrusade = 4,
  ChromieTimeWrath = 5,
  ChromieTimeMists = 6,
  ChromieTimeWoD = 7,
  ChromieTimeLegion = 8,
}
declare enum ChatChannelType {
  None = 0,
  Custom = 1,
  Private_Party = 2,
  Public_Party = 3,
  Communities = 4,
}
declare enum ChrCustomizationCategoryFlag {
  UndressModel = 1,
}
declare enum ChrCustomizationOptionType {
  SelectionPopout = 0,
  Checkbox = 1,
  Slider = 2,
}
declare enum ClickBindingInteraction {
  Target = 1,
  OpenContextMenu = 2,
}
declare enum ClickBindingType {
  None = 0,
  Spell = 1,
  Macro = 2,
  Interaction = 3,
}
declare enum ClientPlatformType {
  Windows = 0,
  Macintosh = 1,
}
declare enum ClientSceneType {
  DefaultSceneType = 0,
  MinigameSceneType = 1,
}
declare enum ClubActionType {
  ErrorClubActionSubscribe = 0,
  ErrorClubActionCreate = 1,
  ErrorClubActionEdit = 2,
  ErrorClubActionDestroy = 3,
  ErrorClubActionLeave = 4,
  ErrorClubActionCreateTicket = 5,
  ErrorClubActionDestroyTicket = 6,
  ErrorClubActionRedeemTicket = 7,
  ErrorClubActionGetTicket = 8,
  ErrorClubActionGetTickets = 9,
  ErrorClubActionGetBans = 10,
  ErrorClubActionGetInvitations = 11,
  ErrorClubActionRevokeInvitation = 12,
  ErrorClubActionAcceptInvitation = 13,
  ErrorClubActionDeclineInvitation = 14,
  ErrorClubActionCreateStream = 15,
  ErrorClubActionEditStream = 16,
  ErrorClubActionDestroyStream = 17,
  ErrorClubActionInviteMember = 18,
  ErrorClubActionEditMember = 19,
  ErrorClubActionEditMemberNote = 20,
  ErrorClubActionKickMember = 21,
  ErrorClubActionAddBan = 22,
  ErrorClubActionRemoveBan = 23,
  ErrorClubActionCreateMessage = 24,
  ErrorClubActionEditMessage = 25,
  ErrorClubActionDestroyMessage = 26,
}
declare enum ClubErrorType {
  ErrorCommunitiesNone = 0,
  ErrorCommunitiesUnknown = 1,
  ErrorCommunitiesNeutralFaction = 2,
  ErrorCommunitiesUnknownRealm = 3,
  ErrorCommunitiesBadTarget = 4,
  ErrorCommunitiesWrongFaction = 5,
  ErrorCommunitiesRestricted = 6,
  ErrorCommunitiesIgnored = 7,
  ErrorCommunitiesGuild = 8,
  ErrorCommunitiesWrongRegion = 9,
  ErrorCommunitiesUnknownTicket = 10,
  ErrorCommunitiesMissingShortName = 11,
  ErrorCommunitiesProfanity = 12,
  ErrorCommunitiesTrial = 13,
  ErrorCommunitiesVeteranTrial = 14,
  ErrorCommunitiesChatMute = 15,
  ErrorClubFull = 16,
  ErrorClubNoClub = 17,
  ErrorClubNotMember = 18,
  ErrorClubAlreadyMember = 19,
  ErrorClubNoSuchMember = 20,
  ErrorClubNoSuchInvitation = 21,
  ErrorClubInvitationAlreadyExists = 22,
  ErrorClubInvalidRoleID = 23,
  ErrorClubInsufficientPrivileges = 24,
  ErrorClubTooManyClubsJoined = 25,
  ErrorClubVoiceFull = 26,
  ErrorClubStreamNoStream = 27,
  ErrorClubStreamInvalidName = 28,
  ErrorClubStreamCountAtMin = 29,
  ErrorClubStreamCountAtMax = 30,
  ErrorClubMemberHasRequiredRole = 31,
  ErrorClubSentInvitationCountAtMax = 32,
  ErrorClubReceivedInvitationCountAtMax = 33,
  ErrorClubTargetIsBanned = 34,
  ErrorClubBanAlreadyExists = 35,
  ErrorClubBanCountAtMax = 36,
  ErrorClubTicketCountAtMax = 37,
  ErrorClubTicketNoSuchTicket = 38,
  ErrorClubTicketHasConsumedAllowedRedeemCount = 39,
  ErrorClubDoesntAllowCrossFaction = 40,
  ErrorClubEditHasCrossFactionMembers = 41,
}
declare enum ClubFieldType {
  ClubName = 0,
  ClubShortName = 1,
  ClubDescription = 2,
  ClubBroadcast = 3,
  ClubStreamName = 4,
  ClubStreamSubject = 5,
  NumTypes = 6,
}
declare enum ClubFinderApplicationUpdateType {
  None = 0,
  AcceptInvite = 1,
  DeclineInvite = 2,
  Cancel = 3,
}
declare enum ClubFinderClubPostingStatusFlags {
  None = 0,
  NeedsCacheUpdate = 1,
  ForceDescriptionChange = 2,
  ForceNameChange = 3,
  UnderReview = 4,
  Banned = 5,
  FakePost = 6,
  PendingDelete = 7,
  PostDelisted = 8,
}
declare enum ClubFinderDisableReason {
  Muted = 0,
  Silenced = 1,
  VeteranTrial = 2,
}
declare enum ClubFinderPostingReportType {
  PostersName = 0,
  ClubName = 1,
  PostingDescription = 2,
  ApplicantsName = 3,
  JoinNote = 4,
}
declare enum ClubFinderRequestType {
  None = 0,
  Guild = 1,
  Community = 2,
  All = 3,
}
declare enum ClubFinderSettingFlags {
  None = 0,
  Dungeons = 1,
  Raids = 2,
  PvP = 3,
  RP = 4,
  Social = 5,
  Small = 6,
  Medium = 7,
  Large = 8,
  Tank = 9,
  Healer = 10,
  Damage = 11,
  EnableListing = 12,
  MaxLevelOnly = 13,
  AutoAccept = 14,
  FactionHorde = 15,
  FactionAlliance = 16,
  FactionNeutral = 17,
  SortRelevance = 18,
  SortMemberCount = 19,
  SortNewest = 20,
  LanguageReserved1 = 21,
  LanguageReserved2 = 22,
  LanguageReserved3 = 23,
  LanguageReserved4 = 24,
  LanguageReserved5 = 25,
}
declare enum ClubInvitationCandidateStatus {
  Available = 0,
  InvitePending = 1,
  AlreadyMember = 2,
}
declare enum ClubMemberPresence {
  Unknown = 0,
  Online = 1,
  OnlineMobile = 2,
  Offline = 3,
  Away = 4,
  Busy = 5,
}
declare enum ClubRemovedReason {
  None = 0,
  Banned = 1,
  Removed = 2,
  ClubDestroyed = 3,
}
declare enum ClubRestrictionReason {
  None = 0,
  Unavailable = 1,
}
declare enum ClubRoleIdentifier {
  Owner = 1,
  Leader = 2,
  Moderator = 3,
  Member = 4,
}
declare enum ClubStreamNotificationFilter {
  None = 0,
  Mention = 1,
  All = 2,
}
declare enum ClubStreamType {
  General = 0,
  Guild = 1,
  Officer = 2,
  Other = 3,
}
declare enum ClubType {
  BattleNet = 0,
  Character = 1,
  Guild = 2,
  Other = 3,
}
declare enum CommunicationMode {
  PushToTalk = 0,
  OpenMic = 1,
}
declare enum ConquestProgressBarDisplayType {
  FirstChest = 0,
  AdditionalChest = 1,
  Seasonal = 2,
}
declare enum ConsoleCategory {
  Debug = 0,
  Graphics = 1,
  Console = 2,
  Combat = 3,
  Game = 4,
  Default = 5,
  Net = 6,
  Sound = 7,
  Gm = 8,
  Reveal = 9,
  None = 10,
}
declare enum ConsoleColorType {
  DefaultColor = 0,
  InputColor = 1,
  EchoColor = 2,
  ErrorColor = 3,
  WarningColor = 4,
  GlobalColor = 5,
  AdminColor = 6,
  HighlightColor = 7,
  BackgroundColor = 8,
  ClickbufferColor = 9,
  PrivateColor = 10,
  DefaultGreen = 11,
}
declare enum ConsoleCommandType {
  Cvar = 0,
  Command = 1,
  Macro = 2,
  Script = 3,
}
declare enum ContributionAppearanceFlags {
  TooltipUseTimeRemaining = 0,
}
declare enum ContributionResult {
  Success = 0,
  MustBeNearNpc = 1,
  IncorrectState = 2,
  InvalidID = 3,
  QuestDataMissing = 4,
  FailedConditionCheck = 5,
  UnableToCompleteTurnIn = 6,
  InternalError = 7,
}
declare enum ContributionState {
  None = 0,
  Building = 1,
  Active = 2,
  UnderAttack = 3,
  Destroyed = 4,
}
declare enum CovenantAbilityType {
  Class = 0,
  Signature = 1,
  Soulbind = 2,
}
declare enum CovenantSkill {
  Kyrian = 2730,
  Venthyr = 2731,
  NightFae = 2732,
  Necrolord = 2733,
}
declare enum CovenantType {
  None = 0,
  Kyrian = 1,
  Venthyr = 2,
  NightFae = 3,
  Necrolord = 4,
}
declare enum CurrencyDestroyReason {
  Cheat = 0,
  Spell = 1,
  VersionUpdate = 2,
  QuestTurnin = 3,
  Vendor = 4,
  Trade = 5,
  Capped = 6,
  Garrison = 7,
  DroppedToCorpse = 8,
  BonusRoll = 9,
  FactionConversion = 10,
  Last = 11,
}
declare enum CurrencyFlags {
  CurrencyTradable = 1,
  CurrencyAppearsInLootWindow = 2,
  CurrencyComputedWeeklyMaximum = 4,
  Currency_100_Scaler = 8,
  CurrencyNoLowLevelDrop = 16,
  CurrencyIgnoreMaxQtyOnLoad = 32,
  CurrencyLogOnWorldChange = 64,
  CurrencyTrackQuantity = 128,
  CurrencyResetTrackedQuantity = 256,
  CurrencyUpdateVersionIgnoreMax = 512,
  CurrencySuppressChatMessageOnVersionChange = 1024,
  CurrencySingleDropInLoot = 2048,
  CurrencyHasWeeklyCatchup = 4096,
  CurrencyDoNotCompressChat = 8192,
  CurrencyDoNotLogAcquisitionToBi = 16384,
  CurrencyNoRaidDrop = 32768,
  CurrencyNotPersistent = 65536,
  CurrencyDeprecated = 131072,
  CurrencyDynamicMaximum = 262144,
  CurrencySuppressChatMessages = 524288,
  CurrencyDoNotToast = 1048576,
  CurrencyDestroyExtraOnLoot = 2097152,
  CurrencyDontShowTotalInTooltip = 4194304,
  CurrencyDontCoalesceInLootWindow = 8388608,
  CurrencyAccountWide = 16777216,
  CurrencyAllowOverflowMailer = 33554432,
  CurrencyHideAsReward = 67108864,
  CurrencyHasWarmodeBonus = 134217728,
  CurrencyIsAllianceOnly = 268435456,
  CurrencyIsHordeOnly = 536870912,
  CurrencyLimitWarmodeBonusOncePerTooltip = 1073741824,
  DeprecatedCurrencyFlag = 2147483648,
}
declare enum CurrencyFlagsB {
  CurrencyBUseTotalEarnedForEarned = 1,
  CurrencyBShowQuestXPGainInTooltip = 2,
  CurrencyBNoNotificationMailOnOfflineProgress = 4,
}
declare enum CurrencyGainFlags {
  BonusAward = 1,
  DroppedFromDeath = 2,
  FromAccountServer = 4,
}
declare enum CurrencySource {
  ConvertOldItem = 0,
  ConvertOldPvPCurrency = 1,
  ItemRefund = 2,
  QuestReward = 3,
  Cheat = 4,
  Vendor = 5,
  PvPKillCredit = 6,
  PvPMetaCredit = 7,
  PvPScriptedAward = 8,
  Loot = 9,
  UpdatingVersion = 10,
  LFGReward = 11,
  Trade = 12,
  Spell = 13,
  ItemDeletion = 14,
  RatedBattleground = 15,
  RandomBattleground = 16,
  Arena = 17,
  ExceededMaxQty = 18,
  PvPCompletionBonus = 19,
  Script = 20,
  GuildBankWithdrawal = 21,
  Pushloot = 22,
  GarrisonBuilding = 23,
  PvPDrop = 24,
  GarrisonFollowerActivation = 25,
  GarrisonBuildingRefund = 26,
  GarrisonMissionReward = 27,
  GarrisonResourceOverTime = 28,
  QuestRewardIgnoreCaps = 29,
  GarrisonTalent = 30,
  GarrisonWorldQuestBonus = 31,
  PvPHonorReward = 32,
  BonusRoll = 33,
  AzeriteRespec = 34,
  WorldQuestReward = 35,
  WorldQuestRewardIgnoreCaps = 36,
  FactionConversion = 37,
  DailyQuestReward = 38,
  DailyQuestWarModeReward = 39,
  WeeklyQuestReward = 40,
  WeeklyQuestWarModeReward = 41,
  AccountCopy = 42,
  WeeklyRewardChest = 43,
  GarrisonTalentTreeReset = 44,
  DailyReset = 45,
  AddConduitToCollection = 46,
  Barbershop = 47,
  ConvertItemsToCurrencyValue = 48,
  PvPTeamContribution = 49,
  Transmogrify = 50,
  AuctionDeposit = 51,
  Last = 52,
}
declare enum CurrencyTokenCategoryFlags {
  FlagSortLast = 1,
  FlagPlayerItemAssignment = 2,
  Hidden = 4,
  Virtual = 8,
}
declare enum CustomBindingType {
  VoicePushToTalk = 0,
}
declare enum Damageclass {
  MaskNone = 0,
  Physical = 0,
  AllPhysical = 1,
  Holy = 1,
  MaskPhysical = 1,
  Fire = 2,
  FirstResist = 2,
  MaskHoly = 2,
  MaskHolystrike = 3,
  Nature = 3,
  Frost = 4,
  MaskFire = 4,
  MaskFlamestrike = 5,
  Shadow = 5,
  Arcane = 6,
  LastResist = 6,
  MaskHolyfire = 6,
  NumClasses = 7,
  MaskNature = 8,
  MaskStormstrike = 9,
  MaskHolystorm = 10,
  MaskFirestorm = 12,
  MaskFrost = 16,
  MaskFroststrike = 17,
  MaskHolyfrost = 18,
  MaskFrostfire = 20,
  MaskFroststorm = 24,
  MaskElemental = 28,
  MaskShadow = 32,
  MaskShadowstrike = 33,
  MaskTwilight = 34,
  MaskShadowflame = 36,
  MaskShadowstorm = 40,
  MaskShadowfrost = 48,
  MaskChromatic = 62,
  MaskArcane = 64,
  MaskSpellstrike = 65,
  MaskDivine = 66,
  MaskSpellfire = 68,
  MaskSpellstorm = 72,
  MaskSpellfrost = 80,
  MaskSpellshadow = 96,
  MaskCosmic = 106,
  MaskChaos = 124,
  AllMagical = 126,
  MaskMagical = 126,
  All = 127,
}
declare enum DamageclassType {
  Physical = 0,
  Magical = 1,
}
declare enum EnvironmentalDamageFlags {
  OneTime = 1,
  DmgIsPct = 2,
}
declare enum Environmentaldamagetype {
  Fatigue = 0,
  Drowning = 1,
  Falling = 2,
  Lava = 3,
  Slime = 4,
  Fire = 5,
}
declare enum EventToastDisplayType {
  NormalSingleLine = 0,
  NormalBlockText = 1,
  NormalTitleAndSubTitle = 2,
  NormalTextWithIcon = 3,
  LargeTextWithIcon = 4,
  NormalTextWithIconAndRarity = 5,
  Scenario = 6,
  ChallengeMode = 7,
  ScenarioClickExpand = 8,
}
declare enum EventToastEventType {
  LevelUp = 0,
  LevelUpSpell = 1,
  LevelUpDungeon = 2,
  LevelUpRaid = 3,
  LevelUpPvP = 4,
  PetBattleNewAbility = 5,
  PetBattleFinalRound = 6,
  PetBattleCapture = 7,
  BattlePetLevelChanged = 8,
  BattlePetLevelUpAbility = 9,
  QuestBossEmote = 10,
  MythicPlusWeeklyRecord = 11,
  QuestTurnedIn = 12,
  WorldStateChange = 13,
  Scenario = 14,
  LevelUpOther = 15,
  PlayerAuraAdded = 16,
  PlayerAuraRemoved = 17,
  SpellScript = 18,
  CriteriaUpdated = 19,
  PvPTierUpdate = 20,
}
declare enum FlightPathFaction {
  Neutral = 0,
  Horde = 1,
  Alliance = 2,
}
declare enum FlightPathState {
  Current = 0,
  Reachable = 1,
  Unreachable = 2,
}
declare enum FollowerAbilityCastResult {
  Success = 0,
  Failure = 1,
  NoPendingCast = 2,
  InvalidTarget = 3,
  InvalidFollowerSpell = 4,
  RerollNotAllowed = 5,
  SingleMissionDuration = 6,
  MustTargetFollower = 7,
  MustTargetTrait = 8,
  InvalidFollowerType = 9,
  MustBeUnique = 10,
  CannotTargetLimitedUseFollower = 11,
  MustTargetLimitedUseFollower = 12,
  AlreadyAtMaxDurability = 13,
  CannotTargetNonAutoMissionFollower = 14,
}
declare enum GamePadPowerLevel {
  Critical = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Wired = 4,
  Unknown = 5,
}
declare enum GarrAutoBoardIndex {
  None = -1,
  AllyLeftBack = 0,
  AllyRightBack = 1,
  AllyLeftFront = 2,
  AllyCenterFront = 3,
  AllyRightFront = 4,
  EnemyLeftFront = 5,
  EnemyCenterLeftFront = 6,
  EnemyCenterRightFront = 7,
  EnemyRightFront = 8,
  EnemyLeftBack = 9,
  EnemyCenterLeftBack = 10,
  EnemyCenterRightBack = 11,
  EnemyRightBack = 12,
}
declare enum GarrAutoCombatSpellTutorialFlag {
  None = 0,
  Single = 1,
  Column = 2,
  Row = 3,
  All = 4,
}
declare enum GarrAutoCombatTutorial {
  SelectMission = 1,
  PlaceCompanion = 2,
  HealCompanion = 4,
  LevelHeal = 8,
  BeneficialEffect = 16,
  AttackSingle = 32,
  AttackColumn = 64,
  AttackRow = 128,
  AttackAll = 256,
  TroopTutorial = 512,
  EnvironmentalEffect = 1024,
}
declare enum GarrAutoCombatantRole {
  None = 0,
  Melee = 1,
  RangedPhysical = 2,
  RangedMagic = 3,
  HealSupport = 4,
  Tank = 5,
}
declare enum GarrAutoEventFlags {
  None = 0,
  AutoAttack = 1,
  Passive = 2,
  Environment = 4,
}
declare enum GarrAutoMissionEventType {
  MeleeDamage = 0,
  RangeDamage = 1,
  SpellMeleeDamage = 2,
  SpellRangeDamage = 3,
  Heal = 4,
  PeriodicDamage = 5,
  PeriodicHeal = 6,
  ApplyAura = 7,
  RemoveAura = 8,
  Died = 9,
}
declare enum GarrAutoPreviewTargetType {
  None = 0,
  Damage = 1,
  Heal = 2,
  Buff = 4,
  Debuff = 8,
}
declare enum GarrFollowerMissionCompleteState {
  Alive = 0,
  KilledByMissionFailure = 1,
  SavedByPreventDeath = 2,
  OutOfDurability = 3,
}
declare enum GarrFollowerQuality {
  None = 0,
  Common = 1,
  Uncommon = 2,
  Rare = 3,
  Epic = 4,
  Legendary = 5,
  Title = 6,
}
declare enum GarrTalentCostType {
  Initial = 0,
  Respec = 1,
  MakePermanent = 2,
  TreeReset = 3,
}
declare enum GarrTalentFeatureSubtype {
  Generic = 0,
  Bastion = 1,
  Revendreth = 2,
  Ardenweald = 3,
  Maldraxxus = 4,
}
declare enum GarrTalentFeatureType {
  Generic = 0,
  AnimaDiversion = 1,
  TravelPortals = 2,
  Adventures = 3,
  ReservoirUpgrades = 4,
  SanctumUnique = 5,
  SoulBinds = 6,
  AnimaDiversionMap = 7,
  Cyphers = 8,
}
declare enum GarrTalentResearchCostSource {
  Talent = 0,
  Tree = 1,
}
declare enum GarrTalentSocketType {
  None = 0,
  Spell = 1,
  Conduit = 2,
}
declare enum GarrTalentTreeType {
  Tiers = 0,
  Classic = 1,
}
declare enum GarrTalentType {
  Standard = 0,
  Minor = 1,
  Major = 2,
  Socket = 3,
}
declare enum GarrTalentUI {
  Generic = 0,
  CovenantSanctum = 1,
  SoulBinds = 2,
  AnimaDiversionMap = 3,
}
declare enum GarrisonFollowerType {
  FollowerType_6_0 = 1,
  FollowerType_6_2 = 2,
  FollowerType_7_0 = 4,
  FollowerType_8_0 = 22,
  FollowerType_9_0 = 123,
}
declare enum GarrisonTalentAvailability {
  Available = 0,
  Unavailable = 1,
  UnavailableAnotherIsResearching = 2,
  UnavailableNotEnoughResources = 3,
  UnavailableNotEnoughGold = 4,
  UnavailableTierUnavailable = 5,
  UnavailablePlayerCondition = 6,
  UnavailableAlreadyHave = 7,
  UnavailableRequiresPrerequisiteTalent = 8,
}
declare enum GarrisonType {
  Type_6_0 = 2,
  Type_7_0 = 3,
  Type_8_0 = 9,
  Type_9_0 = 111,
}
declare enum GossipOptionRewardType {
  Item = 0,
  Currency = 1,
}
declare enum GossipOptionStatus {
  Available = 0,
  Unavailable = 1,
  Locked = 2,
  AlreadyComplete = 3,
}
declare enum HolidayCalendarFlags {
  Alliance = 1,
  Horde = 2,
}
declare enum HolidayFlags {
  IsRegionwide = 1,
  DontShowInCalendar = 2,
  DontDisplayEnd = 4,
  DontDisplayBanner = 8,
  NotAvailableClientSide = 16,
}
declare enum IconAndTextWidgetState {
  Hidden = 0,
  Shown = 1,
  ShownWithDynamicIconFlashing = 2,
  ShownWithDynamicIconNotFlashing = 3,
}
declare enum IconState {
  Hidden = 0,
  ShowState1 = 1,
  ShowState2 = 2,
}
declare enum InputContext {
  None = 0,
  Keyboard = 1,
  Mouse = 2,
  GamePad = 3,
}
declare enum InventoryType {
  IndexNonEquipType = 0,
  IndexHeadType = 1,
  IndexNeckType = 2,
  IndexShoulderType = 3,
  IndexBodyType = 4,
  IndexChestType = 5,
  IndexWaistType = 6,
  IndexLegsType = 7,
  IndexFeetType = 8,
  IndexWristType = 9,
  IndexHandType = 10,
  IndexFingerType = 11,
  IndexTrinketType = 12,
  IndexWeaponType = 13,
  IndexShieldType = 14,
  IndexRangedType = 15,
  IndexCloakType = 16,
  Index2HweaponType = 17,
  IndexBagType = 18,
  IndexTabardType = 19,
  IndexRobeType = 20,
  IndexWeaponmainhandType = 21,
  IndexWeaponoffhandType = 22,
  IndexHoldableType = 23,
  IndexAmmoType = 24,
  IndexThrownType = 25,
  IndexRangedrightType = 26,
  IndexQuiverType = 27,
  IndexRelicType = 28,
}
declare enum ItemArmorSubclass {
  Generic = 0,
  Cloth = 1,
  Leather = 2,
  Mail = 3,
  Plate = 4,
  Cosmetic = 5,
  Shield = 6,
  Libram = 7,
  Idol = 8,
  Totem = 9,
  Sigil = 10,
  Relic = 11,
}
declare enum ItemClass {
  Consumable = 0,
  Container = 1,
  Weapon = 2,
  Gem = 3,
  Armor = 4,
  Reagent = 5,
  Projectile = 6,
  Tradegoods = 7,
  ItemEnhancement = 8,
  Recipe = 9,
  CurrencyTokenObsolete = 10,
  Quiver = 11,
  Questitem = 12,
  Key = 13,
  PermanentObsolete = 14,
  Miscellaneous = 15,
  Glyph = 16,
  Battlepet = 17,
  WoWToken = 18,
}
declare enum ItemCommodityStatus {
  Unknown = 0,
  Item = 1,
  Commodity = 2,
}
declare enum ItemConsumableSubclass {
  Generic = 0,
  Potion = 1,
  Elixir = 2,
  Scroll = 3,
  Fooddrink = 4,
  Itemenhancement = 5,
  Bandage = 6,
  Other = 7,
}
declare enum ItemCreationContext {
  None = 0,
  DungeonNormal = 1,
  DungeonHeroic = 2,
  RaidNormal = 3,
  RaidFinder = 4,
  RaidHeroic = 5,
  RaidMythic = 6,
  PvPUnranked_1 = 7,
  PvPRanked_1 = 8,
  ScenarioNormal = 9,
  ScenarioHeroic = 10,
  QuestReward = 11,
  Store = 12,
  TradeSkill = 13,
  Vendor = 14,
  BlackMarket = 15,
  ChallengeMode_1 = 16,
  DungeonLevelUp_1 = 17,
  DungeonLevelUp_2 = 18,
  DungeonLevelUp_3 = 19,
  DungeonLevelUp_4 = 20,
  ForceNone = 21,
  Timewalker = 22,
  DungeonMythic = 23,
  PvPHonorReward = 24,
  WorldQuest_1 = 25,
  WorldQuest_2 = 26,
  WorldQuest_3 = 27,
  WorldQuest_4 = 28,
  WorldQuest_5 = 29,
  WorldQuest_6 = 30,
  MissionReward_1 = 31,
  MissionReward_2 = 32,
  ChallengeMode_2 = 33,
  ChallengeMode_3 = 34,
  ChallengeModeJackpot = 35,
  WorldQuest_7 = 36,
  WorldQuest_8 = 37,
  PvPRanked_2 = 38,
  PvPRanked_3 = 39,
  PvPRanked_4 = 40,
  PvPUnranked_2 = 41,
  WorldQuest_9 = 42,
  WorldQuest_10 = 43,
  PvPRanked_5 = 44,
  PvPRanked_6 = 45,
  PvPRanked_7 = 46,
  PvPUnranked_3 = 47,
  PvPUnranked_4 = 48,
  PvPUnranked_5 = 49,
  PvPUnranked_6 = 50,
  PvPUnranked_7 = 51,
  PvPRanked_8 = 52,
  WorldQuest_11 = 53,
  WorldQuest_12 = 54,
  WorldQuest_13 = 55,
  PvPRankedJackpot = 56,
  TournamentRealm = 57,
  Relinquished = 58,
  LegendaryForge = 59,
  QuestBonusLoot = 60,
  CharacterBoost_1 = 61,
  CharacterBoost_2 = 62,
  LegendaryCrafting_1 = 63,
  LegendaryCrafting_2 = 64,
  LegendaryCrafting_3 = 65,
  LegendaryCrafting_4 = 66,
  LegendaryCrafting_5 = 67,
  LegendaryCrafting_6 = 68,
  LegendaryCrafting_7 = 69,
  LegendaryCrafting_8 = 70,
  LegendaryCrafting_9 = 71,
  WeeklyRewardsAdditional = 72,
  WeeklyRewardsConcession = 73,
  WorldQuestJackpot = 74,
  NewCharacter = 75,
  WarMode = 76,
  PvPBrawl_1 = 77,
  PvPBrawl_2 = 78,
  Torghast = 79,
  CorpseRecovery = 80,
  WorldBoss = 81,
  RaidNormalExtended = 82,
  RaidFinderExtended = 83,
  RaidHeroicExtended = 84,
  RaidMythicExtended = 85,
  CharacterBoost_3 = 86,
  ChallengeMode_4 = 87,
  PvPRanked_9 = 88,
  RaidNormalExtended_2 = 89,
  RaidFinderExtended_2 = 90,
  RaidHeroicExtended_2 = 91,
  RaidMythicExtended_2 = 92,
  RaidNormalExtended_3 = 93,
  RaidFinderExtended_3 = 94,
  RaidHeroicExtended_3 = 95,
  RaidMythicExtended_3 = 96,
}
declare enum ItemGemColor {
  Meta = 1,
  Red = 2,
  Yellow = 4,
  Blue = 8,
  Hydraulic = 16,
  Cogwheel = 32,
  Iron = 64,
  Blood = 128,
  Shadow = 256,
  Fel = 512,
  Arcane = 1024,
  Frost = 2048,
  Fire = 4096,
  Water = 8192,
  Life = 16384,
  Wind = 32768,
  Holy = 65536,
  PunchcardRed = 131072,
  PunchcardYellow = 262144,
  PunchcardBlue = 524288,
  DominationBlood = 1048576,
  DominationFrost = 2097152,
  DominationUnholy = 4194304,
  Cypher = 8388608,
}
declare enum ItemGemSubclass {
  Intellect = 0,
  Agility = 1,
  Strength = 2,
  Stamina = 3,
  Spirit = 4,
  Criticalstrike = 5,
  Mastery = 6,
  Haste = 7,
  Versatility = 8,
  Other = 9,
  Multiplestats = 10,
  Artifactrelic = 11,
}
declare enum ItemMiscellaneousSubclass {
  Junk = 0,
  Reagent = 1,
  CompanionPet = 2,
  Holiday = 3,
  Other = 4,
  Mount = 5,
  MountEquipment = 6,
}
declare enum ItemModification {
  TransmogrifyItemModifiedAppearanceIDSpecAll = 0,
  TransmogrifyItemModifiedAppearanceIDSpec_0 = 1,
  IncrementLevelObsolete = 2,
  BattlePetSpecies = 3,
  BattlePetBreed = 4,
  BattlePetLevel = 5,
  BattlePetCreaturedisplayid = 6,
  TransmogrifyOverrideEnchantVisualIDSpecAll = 7,
  ArtifactAppearanceID = 8,
  TimewalkerLevel = 9,
  TransmogrifyOverrideEnchantVisualIDSpec_0 = 10,
  TransmogrifyItemModifiedAppearanceIDSpec_1 = 11,
  TransmogrifyOverrideEnchantVisualIDSpec_1 = 12,
  TransmogrifyItemModifiedAppearanceIDSpec_2 = 13,
  TransmogrifyOverrideEnchantVisualIDSpec_2 = 14,
  TransmogrifyItemModifiedAppearanceIDSpec_3 = 15,
  TransmogrifyOverrideEnchantVisualIDSpec_3 = 16,
  KeystoneMapChallengeModeID = 17,
  KeystonePowerLevel = 18,
  KeystoneAffix0 = 19,
  KeystoneAffix01 = 20,
  KeystoneAffix02 = 21,
  KeystoneAffix03 = 22,
  LegionArtifactKnowledgeObsolete = 23,
  ArtifactTier = 24,
  TransmogrifyItemModifiedAppearanceIDSpec_4 = 25,
  PvPRating = 26,
  TransmogrifyOverrideEnchantVisualIDSpec_4 = 27,
  ContentTuningID = 28,
  ChangeModifiedCraftingStat_1 = 29,
  ChangeModifiedCraftingStat_2 = 30,
  TransmogrifySecondaryItemModifiedAppearanceIDSpecAll = 31,
  TransmogrifySecondaryItemModifiedAppearanceIDSpec_0 = 32,
  TransmogrifySecondaryItemModifiedAppearanceIDSpec_1 = 33,
  TransmogrifySecondaryItemModifiedAppearanceIDSpec_2 = 34,
  TransmogrifySecondaryItemModifiedAppearanceIDSpec_3 = 35,
  TransmogrifySecondaryItemModifiedAppearanceIDSpec_4 = 36,
  SoulbindConduitRank = 37,
}
declare enum ItemQuality {
  Poor = 0,
  Common = 1,
  Uncommon = 2,
  Rare = 3,
  Epic = 4,
  Legendary = 5,
  Artifact = 6,
  Heirloom = 7,
  WoWToken = 8,
}
declare enum ItemReagentSubclass {
  Reagent = 0,
  Keystone = 1,
  ContextToken = 2,
}
declare enum ItemRecipeSubclass {
  Book = 0,
  Leatherworking = 1,
  Tailoring = 2,
  Engineering = 3,
  Blacksmithing = 4,
  Cooking = 5,
  Alchemy = 6,
  FirstAid = 7,
  Enchanting = 8,
  Fishing = 9,
  Jewelcrafting = 10,
  Inscription = 11,
}
declare enum ItemSlotFilterType {
  Head = 0,
  Neck = 1,
  Shoulder = 2,
  Cloak = 3,
  Chest = 4,
  Wrist = 5,
  Hand = 6,
  Waist = 7,
  Legs = 8,
  Feet = 9,
  MainHand = 10,
  OffHand = 11,
  Finger = 12,
  Trinket = 13,
  Other = 14,
  NoFilter = 15,
}
declare enum ItemSocketType {
  None = 0,
  Meta = 1,
  Red = 2,
  Yellow = 3,
  Blue = 4,
  Hydraulic = 5,
  Cogwheel = 6,
  Prismatic = 7,
  Iron = 8,
  Blood = 9,
  Shadow = 10,
  Fel = 11,
  Arcane = 12,
  Frost = 13,
  Fire = 14,
  Water = 15,
  Life = 16,
  Wind = 17,
  Holy = 18,
  PunchcardRed = 19,
  PunchcardYellow = 20,
  PunchcardBlue = 21,
  Domination = 22,
  Cypher = 23,
}
declare enum ItemSubclassDisplay {
  HideSubclassInTooltips = 1,
  HideSubclassInAuction = 2,
  ShowItemCount = 4,
}
declare enum ItemSubclassFlag {
  WeaponsubclassCanparry = 1,
  WeaponsubclassSetfingerseq = 2,
  WeaponsubclassIsunarmed = 4,
  WeaponsubclassIsrifle = 8,
  WeaponsubclassIsthrown = 16,
  WeaponsubclassRighthandRanged = 32,
  ItemsubclassQuivernotrequired = 64,
  WeaponsubclassRanged = 128,
  WeaponsubclassDeprecatedReuseMe = 256,
  ItemsubclassUsesInvtype = 512,
  ArmorsubclassLfgscalingarmor = 1024,
}
declare enum ItemTryOnReason {
  Success = 0,
  WrongRace = 1,
  NotEquippable = 2,
  DataPending = 3,
}
declare enum ItemWeaponSubclass {
  Axe1H = 0,
  Axe2H = 1,
  Bows = 2,
  Guns = 3,
  Mace1H = 4,
  Mace2H = 5,
  Polearm = 6,
  Sword1H = 7,
  Sword2H = 8,
  Warglaive = 9,
  Staff = 10,
  Bearclaw = 11,
  Catclaw = 12,
  Unarmed = 13,
  Generic = 14,
  Dagger = 15,
  Thrown = 16,
  Obsolete3 = 17,
  Crossbow = 18,
  Wand = 19,
  Fishingpole = 20,
}
declare enum Itemclassfilterflags {
  Consumable = 1,
  Container = 2,
  Weapon = 4,
  Gem = 8,
  Armor = 16,
  Reagent = 32,
  Projectile = 64,
  Tradegoods = 128,
  ItemEnhancement = 256,
  Recipe = 512,
  CurrencyTokenObsolete = 1024,
  Quiver = 2048,
  Questitemclassfilterflags = 4096,
  Key = 8192,
  PermanentObsolete = 16384,
  Miscellaneous = 32768,
  Glyph = 65536,
  Battlepet = 131072,
}
declare enum Itemsetflags {
  Legacy = 1,
  UseItemHistorySetSlots = 2,
  RequiresPvPTalentsActive = 4,
}
declare enum JailersTowerType {
  TwistingCorridors = 0,
  SkoldusHalls = 1,
  FractureChambers = 2,
  Soulforges = 3,
  Coldheart = 4,
  Mortregar = 5,
  UpperReaches = 6,
  ArkobanHall = 7,
  TormentChamberJaina = 8,
  TormentChamberThrall = 9,
  TormentChamberAnduin = 10,
  AdamantVaults = 11,
  ForgottenCatacombs = 12,
  Ossuary = 13,
  BossRush = 14,
}
declare enum LFGEntryPlaystyle {
  None = 0,
  Standard = 1,
  Casual = 2,
  Hardcore = 3,
}
declare enum LFGListDisplayType {
  RoleCount = 0,
  RoleEnumerate = 1,
  ClassEnumerate = 2,
  HideAll = 3,
  PlayerCount = 4,
}
declare enum LFGListFilter {
  Recommended = 1,
  NotRecommended = 2,
  PvE = 4,
  PvP = 8,
}
declare enum LanguageFlag {
  IsExotic = 1,
  HiddenFromPlayer = 2,
}
declare enum LinkedCurrencyFlags {
  IgnoreAdd = 1,
  IgnoreSubtract = 2,
  SuppressChatLog = 4,
}
declare enum ManipulatorEventType {
  Start = 0,
  Move = 1,
  Complete = 2,
  Delete = 3,
}
declare enum MapCanvasPosition {
  None = 0,
  BottomLeft = 1,
  BottomRight = 2,
  TopLeft = 3,
  TopRight = 4,
}
declare enum MapOverlayDisplayLocation {
  Default = 0,
  BottomLeft = 1,
  TopLeft = 2,
  BottomRight = 3,
  TopRight = 4,
  Hidden = 5,
}
declare enum ModelSceneSetting {
  AlignLightToOrbitDelta = 1,
}
declare enum ModelSceneType {
  MountJournal = 0,
  PetJournalCard = 1,
  ShopCard = 2,
  EncounterJournal = 3,
  PetJournalLoadout = 4,
  ArtifactTier2 = 5,
  ArtifactTier2ForgingScene = 6,
  ArtifactTier2SlamEffect = 7,
  CommentatorVictoryFanfare = 8,
  ArtifactRelicTalentEffect = 9,
  PvPWarModeOrb = 10,
  PvPWarModeFire = 11,
  PartyPose = 12,
  AzeriteItemLevelUpToast = 13,
  AzeritePowers = 14,
  AzeriteRewardGlow = 15,
  HeartOfAzeroth = 16,
  WorldMapThreat = 17,
  Soulbinds = 18,
  JailersTowerAnimaGlow = 19,
}
declare enum MountType {
  Ground = 0,
  Flying = 1,
  Aquatic = 2,
}
declare enum MountTypeFlag {
  IsFlyingMount = 1,
  IsAquaticMount = 2,
}
declare enum NavigationState {
  Invalid = 0,
  Occluded = 1,
  InRange = 2,
}
declare enum OptionalReagentItemFlag {
  TooltipShowsAsStatModifications = 0,
}
declare enum PartyRequestJoinRelation {
  None = 0,
  Friend = 1,
  Guild = 2,
  Club = 3,
  NumPartyRequestJoinRelations = 4,
}
declare enum PermanentChatChannelType {
  None = 0,
  Zone = 1,
  Communities = 2,
  Custom = 3,
}
declare enum PetBattleQueueStatus {
  None = 0,
  Queued = 1,
  QueuedUpdate = 2,
  AlreadyQueued = 3,
  JoinFailed = 4,
  JoinFailedSlots = 5,
  JoinFailedJournalLock = 6,
  JoinFailedNeutral = 7,
  MatchAccepted = 8,
  MatchDeclined = 9,
  MatchOpponentDeclined = 10,
  ProposalTimedOut = 11,
  Removed = 12,
  RequeuedAfterInternalError = 13,
  RequeuedAfterOpponentRemoved = 14,
  Matchmaking = 15,
  LostConnection = 16,
  Shutdown = 17,
  Suspended = 18,
  Unsuspended = 19,
  InBattle = 20,
  NoBattlingHere = 21,
}
declare enum PetJournalError {
  None = 0,
  PetIsDead = 1,
  JournalIsLocked = 2,
  InvalidFaction = 3,
  NoFavoritesToSummon = 4,
  NoValidRandomSummon = 5,
  InvalidCovenant = 6,
}
declare enum PetbattleAuraStateFlags {
  None = 0,
  Infinite = 1,
  Canceled = 2,
  InitDisabled = 4,
  CountdownFirstRound = 8,
  JustApplied = 16,
  RemoveEventHandled = 32,
}
declare enum PetbattleCheatFlags {
  None = 0,
  AutoPlay = 1,
}
declare enum PetbattleEffectFlags {
  None = 0,
  InvalidTarget = 1,
  Miss = 2,
  Crit = 4,
  Blocked = 8,
  Dodge = 16,
  Heal = 32,
  Unkillable = 64,
  Reflect = 128,
  Absorb = 256,
  Immune = 512,
  Strong = 1024,
  Weak = 2048,
  SuccessChain = 4096,
  AuraReapply = 8192,
}
declare enum PetbattleEffectType {
  SetHealth = 0,
  AuraApply = 1,
  AuraCancel = 2,
  AuraChange = 3,
  PetSwap = 4,
  StatusChange = 5,
  SetState = 6,
  SetMaxHealth = 7,
  SetSpeed = 8,
  SetPower = 9,
  TriggerAbility = 10,
  AbilityChange = 11,
  NpcEmote = 12,
  AuraProcessingBegin = 13,
  AuraProcessingEnd = 14,
  ReplacePet = 15,
  OverrideAbility = 16,
  WorldStateUpdate = 17,
}
declare enum PetbattleEnviros {
  Pad0 = 0,
  Pad1 = 1,
  Weather = 2,
}
declare enum PetbattleInputMoveMsgDebugFlag {
  None = 0,
  DontValidate = 1,
  EnemyCast = 2,
}
declare enum PetbattleMoveType {
  Quit = 0,
  Ability = 1,
  Swap = 2,
  Trap = 3,
  FinalRoundOk = 4,
  Pass = 5,
}
declare enum PetbattlePboid {
  P0Pet_0 = 0,
  P0Pet_1 = 1,
  P0Pet_2 = 2,
  P1Pet_0 = 3,
  P1Pet_1 = 4,
  P1Pet_2 = 5,
  EnvPad_0 = 6,
  EnvPad_1 = 7,
  EnvWeather = 8,
}
declare enum PetbattlePetStatus {
  FlagNone = 0,
  FlagTrapped = 1,
  Stunned = 2,
  SwapOutLocked = 4,
  SwapInLocked = 8,
}
declare enum PetbattlePlayer {
  Player_0 = 0,
  Player_1 = 1,
}
declare enum PetbattlePlayerInputFlags {
  None = 0,
  TurnInProgress = 1,
  AbilityLocked = 2,
  SwapLocked = 4,
  WaitingForPet = 8,
}
declare enum PetbattleResult {
  FailUnknown = 0,
  FailNotHere = 1,
  FailNotHereOnTransport = 2,
  FailNotHereUnevenGround = 3,
  FailNotHereObstructed = 4,
  FailNotWhileInCombat = 5,
  FailNotWhileDead = 6,
  FailNotWhileFlying = 7,
  FailTargetInvalid = 8,
  FailTargetOutOfRange = 9,
  FailTargetNotCapturable = 10,
  FailNotATrainer = 11,
  FailDeclined = 12,
  FailInBattle = 13,
  FailInvalidLoadout = 14,
  FailInvalidLoadoutAllDead = 15,
  FailInvalidLoadoutNoneSlotted = 16,
  FailNoJournalLock = 17,
  FailWildPetTapped = 18,
  FailRestrictedAccount = 19,
  FailOpponentNotAvailable = 20,
  FailLogout = 21,
  FailDisconnect = 22,
  Success = 23,
}
declare enum PetbattleSlot {
  Slot_0 = 0,
  Slot_1 = 1,
  Slot_2 = 2,
}
declare enum PetbattleSlotAbility {
  Ability_0 = 0,
  Ability_1 = 1,
  Ability_2 = 2,
}
declare enum PetbattleSlotResult {
  Success = 0,
  SlotLocked = 1,
  SlotEmpty = 2,
  NoTracker = 3,
  NoSpeciesRec = 4,
  CantBattle = 5,
  Revoked = 6,
  Dead = 7,
  NoPet = 8,
}
declare enum PetbattleState {
  Created = 0,
  WaitingPreBattle = 1,
  RoundInProgress = 2,
  WaitingForFrontPets = 3,
  CreatedFailed = 4,
  FinalRound = 5,
  Finished = 6,
}
declare enum PetbattleTrapstatus {
  Invalid = 0,
  CanTrap = 1,
  CantTrapNewbie = 2,
  CantTrapPetDead = 3,
  CantTrapPetHealth = 4,
  CantTrapNoRoomInJournal = 5,
  CantTrapPetNotCapturable = 6,
  CantTrapTrainerBattle = 7,
  CantTrapTwice = 8,
}
declare enum PetbattleType {
  PvE = 0,
  PvP = 1,
  Lfpb = 2,
  Npc = 3,
}
declare enum PhaseReason {
  Phasing = 0,
  Sharding = 1,
  WarMode = 2,
  ChromieTime = 3,
}
declare enum PlayerChoiceRarity {
  Common = 0,
  Uncommon = 1,
  Rare = 2,
  Epic = 3,
}
declare enum PlayerClubRequestStatus {
  None = 0,
  Pending = 1,
  AutoApproved = 2,
  Declined = 3,
  Approved = 4,
  Joined = 5,
  JoinedAnother = 6,
  Canceled = 7,
}
declare enum PlayerCurrencyFlags {
  Incremented = 1,
  Loading = 2,
}
declare enum PlayerCurrencyFlagsDbFlags {
  IgnoreMaxQtyOnload = 1,
  Reuse1 = 2,
  InBackpack = 4,
  UnusedInUI = 8,
  Reuse2 = 16,
}
declare enum PlayerMentorshipApplicationResult {
  Success = 0,
  AlreadyMentor = 1,
  Ineligible = 2,
}
declare enum PlayerMentorshipStatus {
  None = 0,
  Newcomer = 1,
  Mentor = 2,
}
declare enum PowerType {
  HealthCost = -2,
  None = -1,
  Mana = 0,
  Rage = 1,
  Focus = 2,
  Energy = 3,
  ComboPoints = 4,
  Runes = 5,
  RunicPower = 6,
  SoulShards = 7,
  LunarPower = 8,
  HolyPower = 9,
  Alternate = 10,
  Maelstrom = 11,
  Chi = 12,
  Insanity = 13,
  Obsolete = 14,
  Obsolete2 = 15,
  ArcaneCharges = 16,
  Fury = 17,
  Pain = 18,
  NumPowerTypes = 19,
}
declare enum PvPFaction {
  Horde = 0,
  Alliance = 1,
}
declare enum PvPMatchState {
  Inactive = 0,
  Active = 1,
  Complete = 2,
}
declare enum PvPUnitClassification {
  FlagCarrierHorde = 0,
  FlagCarrierAlliance = 1,
  FlagCarrierNeutral = 2,
  CartRunnerHorde = 3,
  CartRunnerAlliance = 4,
  AssassinHorde = 5,
  AssassinAlliance = 6,
  OrbCarrierBlue = 7,
  OrbCarrierGreen = 8,
  OrbCarrierOrange = 9,
  OrbCarrierPurple = 10,
}
declare enum QuestFrequency {
  Default = 0,
  Daily = 1,
  Weekly = 2,
}
declare enum QuestLineFloorLocation {
  Above = 0,
  Below = 1,
  Same = 2,
}
declare enum QuestPOIQuestTypes {
  Normal = 1,
  Campaign = 2,
  Calling = 3,
}
declare enum QuestSessionCommand {
  None = 0,
  Start = 1,
  Stop = 2,
  SessionActiveNoCommand = 3,
}
declare enum QuestSessionResult {
  Ok = 0,
  NotInParty = 1,
  InvalidOwner = 2,
  AlreadyActive = 3,
  NotActive = 4,
  InRaid = 5,
  OwnerRefused = 6,
  Timeout = 7,
  Disabled = 8,
  Started = 9,
  Stopped = 10,
  Joined = 11,
  Left = 12,
  OwnerLeft = 13,
  ReadyCheckFailed = 14,
  PartyDestroyed = 15,
  MemberTimeout = 16,
  AlreadyMember = 17,
  NotOwner = 18,
  AlreadyOwner = 19,
  AlreadyJoined = 20,
  NotMember = 21,
  Busy = 22,
  JoinRejected = 23,
  Logout = 24,
  Empty = 25,
  QuestNotCompleted = 26,
  Resync = 27,
  Restricted = 28,
  InPetBattle = 29,
  InvalidPublicParty = 30,
  Unknown = 31,
  InCombat = 32,
  MemberInCombat = 33,
  RestrictedCrossFaction = 34,
}
declare enum QuestTag {
  Group = 1,
  PvP = 41,
  Raid = 62,
  Dungeon = 81,
  Legendary = 83,
  Heroic = 85,
  Raid10 = 88,
  Raid25 = 89,
  Scenario = 98,
  Account = 102,
  CombatAlly = 266,
}
declare enum QuestTagType {
  Tag = 0,
  Profession = 1,
  Normal = 2,
  PvP = 3,
  PetBattle = 4,
  Bounty = 5,
  Dungeon = 6,
  Invasion = 7,
  Raid = 8,
  Contribution = 9,
  RatedReward = 10,
  InvasionWrapper = 11,
  FactionAssault = 12,
  Islands = 13,
  Threat = 14,
  CovenantCalling = 15,
}
declare enum QuestWatchType {
  Automatic = 0,
  Manual = 1,
}
declare enum RafLinkType {
  None = 0,
  Recruit = 1,
  Friend = 2,
  Both = 3,
}
declare enum RafRecruitActivityState {
  Incomplete = 0,
  Complete = 1,
  RewardClaimed = 2,
}
declare enum RafRecruitSubStatus {
  Trial = 0,
  Active = 1,
  Inactive = 2,
}
declare enum RafRewardType {
  Pet = 0,
  Mount = 1,
  Appearance = 2,
  Title = 3,
  GameTime = 4,
  AppearanceSet = 5,
  Illusion = 6,
  Invalid = 7,
}
declare enum RelativeContentDifficulty {
  Trivial = 0,
  Easy = 1,
  Fair = 2,
  Difficult = 3,
  Impossible = 4,
}
declare enum ReportMajorCategory {
  InappropriateCommunication = 0,
  GameplaySabotage = 1,
  Cheating = 2,
  InappropriateName = 3,
}
declare enum ReportMinorCategory {
  TextChat = 1,
  Boosting = 2,
  Spam = 4,
  Afk = 8,
  IntentionallyFeeding = 16,
  BlockingProgress = 32,
  Hacking = 64,
  Botting = 128,
  Advertisement = 256,
  BTag = 512,
  GroupName = 1024,
  CharacterName = 2048,
  GuildName = 4096,
  Description = 8192,
  Name = 16384,
}
declare enum ReportType {
  Chat = 0,
  InWorld = 1,
  ClubFinderPosting = 2,
  ClubFinderApplicant = 3,
  GroupFinderPosting = 4,
  GroupFinderApplicant = 5,
  ClubMember = 6,
  GroupMember = 7,
  Friend = 8,
  Pet = 9,
  BattlePet = 10,
  Calendar = 11,
  Mail = 12,
  PvP = 13,
  PvPScoreboard = 14,
}
declare enum RuneforgePowerFilter {
  All = 0,
  Relevant = 1,
  Available = 2,
  Unavailable = 3,
}
declare enum RuneforgePowerState {
  Available = 0,
  Unavailable = 1,
  Invalid = 2,
}
declare enum ScriptedAnimationBehavior {
  None = 0,
  TargetShake = 1,
  TargetKnockBack = 2,
  SourceRecoil = 3,
  SourceCollideWithTarget = 4,
  UIParentShake = 5,
}
declare enum ScriptedAnimationFlags {
  UseTargetAsSource = 1,
}
declare enum ScriptedAnimationTrajectory {
  AtSource = 0,
  AtTarget = 1,
  Straight = 2,
  CurveLeft = 3,
  CurveRight = 4,
  CurveRandom = 5,
  HalfwayBetween = 6,
}
declare enum SelfResurrectOptionType {
  Spell = 0,
  Item = 1,
}
declare enum SkinningState {
  None = 0,
  Reserved = 1,
  Skinning = 2,
  Looting = 3,
  Skinned = 4,
}
declare enum SoulbindConduitFlags {
  VisibleToGetallsoulbindconduitScript = 1,
}
declare enum SoulbindConduitInstallResult {
  Success = 0,
  InvalidItem = 1,
  InvalidConduit = 2,
  InvalidTalent = 3,
  DuplicateConduit = 4,
  ForgeNotInProximity = 5,
  SocketNotEmpty = 6,
}
declare enum SoulbindConduitTransactionType {
  Install = 0,
  Uninstall = 1,
}
declare enum SoulbindConduitType {
  Finesse = 0,
  Potency = 1,
  Endurance = 2,
  Flex = 3,
}
declare enum SoulbindNodeState {
  Unavailable = 0,
  Unselected = 1,
  Selectable = 2,
  Selected = 3,
}
declare enum SpellDisplayIconDisplayType {
  Buff = 0,
  Debuff = 1,
  Circular = 2,
  NoBorder = 3,
}
declare enum SpellDisplayIconSizeType {
  Small = 0,
  Medium = 1,
  Large = 2,
}
declare enum SpellDisplayTextShownStateType {
  Shown = 0,
  Hidden = 1,
}
declare enum SplashScreenType {
  WhatsNew = 0,
  SeasonRollOver = 1,
}
declare enum StatusBarColorTintValue {
  None = 0,
  Black = 1,
  White = 2,
  Red = 3,
  Yellow = 4,
  Orange = 5,
  Purple = 6,
  Green = 7,
  Blue = 8,
}
declare enum StatusBarOverrideBarTextShownType {
  Never = 0,
  Always = 1,
  OnlyOnMouseover = 2,
  OnlyNotOnMouseover = 3,
}
declare enum StatusBarValueTextType {
  Hidden = 0,
  Percentage = 1,
  Value = 2,
  Time = 3,
  TimeShowOneLevelOnly = 4,
  ValueOverMax = 5,
  ValueOverMaxNormalized = 6,
}
declare enum SubscriptionInterstitialResponseType {
  Clicked = 0,
  Closed = 1,
  WebRedirect = 2,
}
declare enum SubscriptionInterstitialType {
  Standard = 0,
  LeftNpeArea = 1,
  MaxLevel = 2,
}
declare enum SummonStatus {
  None = 0,
  Pending = 1,
  Accepted = 2,
  Declined = 3,
}
declare enum SuperTrackingType {
  Quest = 0,
  UserWaypoint = 1,
  Corpse = 2,
  Scenario = 3,
}
declare enum TooltipSide {
  Left = 0,
  Right = 1,
  Top = 2,
  Bottom = 3,
}
declare enum TooltipTextureAnchor {
  LeftTop = 0,
  LeftCenter = 1,
  LeftBottom = 2,
  RightTop = 3,
  RightCenter = 4,
  RightBottom = 5,
  All = 6,
}
declare enum TooltipTextureRelativeRegion {
  LeftLine = 0,
  RightLine = 1,
}
declare enum TrackedSpellCategory {
  Offensive = 0,
  Defensive = 1,
  Debuff = 2,
  Count = 3,
}
declare enum TransmogCameraVariation {
  None = 0,
  CloakBackpack = 1,
  RightShoulder = 1,
}
declare enum TransmogCollectionType {
  None = 0,
  Head = 1,
  Shoulder = 2,
  Back = 3,
  Chest = 4,
  Shirt = 5,
  Tabard = 6,
  Wrist = 7,
  Hands = 8,
  Waist = 9,
  Legs = 10,
  Feet = 11,
  Wand = 12,
  OneHAxe = 13,
  OneHSword = 14,
  OneHMace = 15,
  Dagger = 16,
  Fist = 17,
  Shield = 18,
  Holdable = 19,
  TwoHAxe = 20,
  TwoHSword = 21,
  TwoHMace = 22,
  Staff = 23,
  Polearm = 24,
  Bow = 25,
  Gun = 26,
  Crossbow = 27,
  Warglaives = 28,
  Paired = 29,
}
declare enum TransmogIllisionFlags {
  HideUntilCollected = 1,
  PlayerConditionGrantsOnLogin = 2,
}
declare enum TransmogModification {
  Main = 0,
  Secondary = 1,
}
declare enum TransmogPendingType {
  Apply = 0,
  Revert = 1,
  ToggleOn = 2,
  ToggleOff = 3,
}
declare enum TransmogSearchType {
  Items = 1,
  BaseSets = 2,
  UsableSets = 3,
}
declare enum TransmogSlot {
  Head = 0,
  Shoulder = 1,
  Back = 2,
  Chest = 3,
  Body = 4,
  Tabard = 5,
  Wrist = 6,
  Hand = 7,
  Waist = 8,
  Legs = 9,
  Feet = 10,
  Mainhand = 11,
  Offhand = 12,
}
declare enum TransmogSource {
  None = 0,
  JournalEncounter = 1,
  Quest = 2,
  Vendor = 3,
  WorldDrop = 4,
  HiddenUntilCollected = 5,
  CantCollect = 6,
  Achievement = 7,
  Profession = 8,
  NotValidForTransmog = 9,
}
declare enum TransmogType {
  Appearance = 0,
  Illusion = 1,
}
declare enum TransmogUseErrorType {
  None = 0,
  PlayerCondition = 1,
  Skill = 2,
  Ability = 3,
  Faction = 4,
  Holiday = 5,
  HotRecheckFailed = 6,
}
declare enum TtsBoolSetting {
  PlaySoundSeparatingChatLineBreaks = 0,
  AddCharacterNameToSpeech = 1,
  PlayActivitySoundWhenNotFocused = 2,
  AlternateSystemVoice = 3,
  NarrateMyMessages = 4,
}
declare enum TtsVoiceType {
  Standard = 0,
  Alternate = 1,
}
declare enum UICursorType {
  Default = 0,
  Item = 1,
  Money = 2,
  Spell = 3,
  PetAction = 4,
  Merchant = 5,
  ActionBar = 6,
  Macro = 7,
  AmmoObsolete = 9,
  Pet = 10,
  GuildBank = 11,
  GuildBankMoney = 12,
  EquipmentSet = 13,
  Currency = 14,
  Flyout = 15,
  VoidItem = 16,
  BattlePet = 17,
  Mount = 18,
  Toy = 19,
  ConduitCollectionItem = 20,
}
declare enum UIFrameType {
  JailersTowerBuffs = 0,
}
declare enum UIItemInteractionFlags {
  DisplayWithInset = 1,
  ConfirmationHasDelay = 2,
  ConversionMode = 4,
  ClickShowsFlyout = 8,
}
declare enum UIItemInteractionType {
  None = 0,
  CastSpell = 1,
  CleanseCorruption = 2,
  RunecarverScrapping = 3,
  ItemConversion = 4,
}
declare enum UIMapFlag {
  NoHighlight = 1,
  ShowOverlays = 2,
  ShowTaxiNodes = 4,
  GarrisonMap = 8,
  FallbackToParentMap = 16,
  NoHighlightTexture = 32,
  ShowTaskObjectives = 64,
  NoWorldPositions = 128,
  HideArchaeologyDigs = 256,
  Deprecated = 512,
  HideIcons = 1024,
  HideVignettes = 2048,
  ForceAllOverlayExplored = 4096,
  FlightMapShowZoomOut = 8192,
  FlightMapAutoZoom = 16384,
  ForceOnNavbar = 32768,
  AlwaysAllowUserWaypoints = 65536,
}
declare enum UIMapSystem {
  World = 0,
  Taxi = 1,
  Adventure = 2,
  Minimap = 3,
}
declare enum UIMapType {
  Cosmic = 0,
  World = 1,
  Continent = 2,
  Zone = 3,
  Dungeon = 4,
  Micro = 5,
  Orphan = 6,
}
declare enum UIWidgetBlendModeType {
  Opaque = 0,
  Additive = 1,
}
declare enum UIWidgetFlag {
  UniversalWidget = 1,
}
declare enum UIWidgetFontType {
  Normal = 0,
  Shadow = 1,
  Outline = 2,
}
declare enum UIWidgetLayoutDirection {
  Default = 0,
  Vertical = 1,
  Horizontal = 2,
  Overlap = 3,
  HorizontalForceNewRow = 4,
}
declare enum UIWidgetModelSceneLayer {
  None = 0,
  Front = 1,
  Back = 2,
}
declare enum UIWidgetMotionType {
  Instant = 0,
  Smooth = 1,
}
declare enum UIWidgetScale {
  OneHundred = 0,
  Ninty = 1,
  Eighty = 2,
  Seventy = 3,
  Sixty = 4,
  Fifty = 5,
}
declare enum UIWidgetSetLayoutDirection {
  Vertical = 0,
  Horizontal = 1,
}
declare enum UIWidgetTextSizeType {
  Small = 0,
  Medium = 1,
  Large = 2,
  Huge = 3,
  Standard = 4,
}
declare enum UIWidgetTooltipLocation {
  Default = 0,
  BottomLeft = 1,
  Left = 2,
  TopLeft = 3,
  Top = 4,
  TopRight = 5,
  Right = 6,
  BottomRight = 7,
  Bottom = 8,
}
declare enum UIWidgetVisualizationType {
  IconAndText = 0,
  CaptureBar = 1,
  StatusBar = 2,
  DoubleStatusBar = 3,
  IconTextAndBackground = 4,
  DoubleIconAndText = 5,
  StackedResourceTracker = 6,
  IconTextAndCurrencies = 7,
  TextWithState = 8,
  HorizontalCurrencies = 9,
  BulletTextList = 10,
  ScenarioHeaderCurrenciesAndBackground = 11,
  TextureAndText = 12,
  SpellDisplay = 13,
  DoubleStateIconRow = 14,
  TextureAndTextRow = 15,
  ZoneControl = 16,
  CaptureZone = 17,
  TextureWithAnimation = 18,
  DiscreteProgressSteps = 19,
  ScenarioHeaderTimer = 20,
  TextColumnRow = 21,
  Spacer = 22,
  UnitPowerBar = 23,
}
declare enum UnitSex {
  Male = 0,
  Female = 1,
  None = 2,
  Both = 3,
}
declare enum ValidateNameResult {
  NameSuccess = 0,
  NameFailure = 1,
  NameNoName = 2,
  NameTooShort = 3,
  NameTooLong = 4,
  NameInvalidCharacter = 5,
  NameMixedLanguages = 6,
  NameProfane = 7,
  NameReserved = 8,
  NameInvalidApostrophe = 9,
  NameMultipleApostrophes = 10,
  NameThreeConsecutive = 11,
  NameInvalidSpace = 12,
  NameConsecutiveSpaces = 13,
  NameRussianConsecutiveSilentCharacters = 14,
  NameRussianSilentCharacterAtBeginningOrEnd = 15,
  NameDeclensionDoesntMatchBaseName = 16,
  NameSpacesDisallowed = 17,
}
declare enum VasPurchaseProgress {
  Invalid = 0,
  PrePurchase = 1,
  PaymentPending = 2,
  ApplyingLicense = 3,
  WaitingOnQueue = 4,
  Ready = 5,
  ProcessingFactionChange = 6,
  Complete = 7,
}
declare enum VignetteType {
  Normal = 0,
  PvPBounty = 1,
  Torghast = 2,
  Treasure = 3,
}
declare enum VoiceChannelErrorReason {
  Unknown = 0,
  IsBattleNetChannel = 1,
}
declare enum VoiceChatStatusCode {
  Success = 0,
  OperationPending = 1,
  TooManyRequests = 2,
  LoginProhibited = 3,
  ClientNotInitialized = 4,
  ClientNotLoggedIn = 5,
  ClientAlreadyLoggedIn = 6,
  ChannelNameTooShort = 7,
  ChannelNameTooLong = 8,
  ChannelAlreadyExists = 9,
  AlreadyInChannel = 10,
  TargetNotFound = 11,
  Failure = 12,
  ServiceLost = 13,
  UnableToLaunchProxy = 14,
  ProxyConnectionTimeOut = 15,
  ProxyConnectionUnableToConnect = 16,
  ProxyConnectionUnexpectedDisconnect = 17,
  Disabled = 18,
  UnsupportedChatChannelType = 19,
  InvalidCommunityStream = 20,
  PlayerSilenced = 21,
  PlayerVoiceChatParentalDisabled = 22,
  InvalidInputDevice = 23,
  InvalidOutputDevice = 24,
}
declare enum VoiceTtsDestination {
  RemoteTransmission = 0,
  LocalPlayback = 1,
  RemoteTransmissionWithLocalPlayback = 2,
  QueuedRemoteTransmission = 3,
  QueuedLocalPlayback = 4,
  QueuedRemoteTransmissionWithLocalPlayback = 5,
  ScreenReader = 6,
}
declare enum VoiceTtsStatusCode {
  Success = 0,
  InvalidEngineType = 1,
  EngineAllocationFailed = 2,
  NotSupported = 3,
  MaxCharactersExceeded = 4,
  UtteranceBelowMinimumDuration = 5,
  InputTextEnqueued = 6,
  SdkNotInitialized = 7,
  DestinationQueueFull = 8,
  EnqueueNotNecessary = 9,
  UtteranceNotFound = 10,
  ManagerNotFound = 11,
  InvalidArgument = 12,
  InternalError = 13,
}
declare enum WeeklyRewardChestThresholdType {
  None = 0,
  MythicPlus = 1,
  RankedPvP = 2,
  Raid = 3,
  AlsoReceive = 4,
  Concession = 5,
}
declare enum WidgetAnimationType {
  None = 0,
  Fade = 1,
}
declare enum WidgetCurrencyClass {
  Currency = 0,
  Item = 1,
}
declare enum WidgetEnabledState {
  Disabled = 0,
  Enabled = 1,
  Red = 2,
  White = 3,
  Green = 4,
  Gold = 5,
  Black = 6,
}
declare enum WidgetShownState {
  Hidden = 0,
  Shown = 1,
}
declare enum WidgetTextHorizontalAlignmentType {
  Left = 0,
  Center = 1,
  Right = 2,
}
declare enum WidgetUnitPowerBarFlashMomentType {
  FlashWhenMax = 0,
  FlashWhenMin = 1,
  NeverFlash = 2,
}
declare enum WoWEntitlementType {
  Item = 0,
  Mount = 1,
  Battlepet = 2,
  Toy = 3,
  Appearance = 4,
  AppearanceSet = 5,
  GameTime = 6,
  Title = 7,
  Illusion = 8,
  Invalid = 9,
}
declare enum WorldQuestQuality {
  Common = 0,
  Rare = 1,
  Epic = 2,
}
declare enum ZoneControlActiveState {
  Inactive = 0,
  Active = 1,
}
declare enum ZoneControlDangerFlashType {
  ShowOnGoodStates = 0,
  ShowOnBadStates = 1,
  ShowOnBoth = 2,
  ShowOnNeither = 3,
}
declare enum ZoneControlFillType {
  SingleFillClockwise = 0,
  SingleFillCounterClockwise = 1,
  DoubleFillClockwise = 2,
  DoubleFillCounterClockwise = 3,
}
declare enum ZoneControlLeadingEdgeType {
  NoLeadingEdge = 0,
  UseLeadingEdge = 1,
}
declare enum ZoneControlMode {
  BothStatesAreGood = 0,
  State1IsGood = 1,
  State2IsGood = 2,
  NeitherStateIsGood = 3,
}
declare enum ZoneControlState {
  State1 = 0,
  State2 = 1,
}

declare enum CalendarGetEventTypeConstants {
  DEFAULT_CALENDAR_GET_EVENT_TYPE = 0,
}
declare enum Callings {
  MaxCallings = 3,
}
declare enum CurrencyConsts {
  HONOR_PER_CURRENCY = 10,
  PLAYER_CURRENCY_CLIENT_FLAGS = 12,
  CONQUEST_ARENA_AND_BG_META_CURRENCY_ID = 483,
  CONQUEST_RATED_BG_META_CURRENCY_ID = 484,
  CONQUEST_ASHRAN_META_CURRENCY_ID = 692,
  ARTIFACT_KNOWLEDGE_CURRENCY_ID = 1171,
  WAR_RESOURCES_CURRENCY_ID = 1560,
  ACCOUNT_WIDE_HONOR_CURRENCY_ID = 1585,
  ACCOUNT_WIDE_HONOR_LEVEL_CURRENCY_ID = 1586,
  CONQUEST_CURRENCY_ID = 1602,
  HONOR_CURRENCY_ID = 1792,
  ECHOES_OF_NYALOTHA_CURRENCY_ID = 1803,
  CURRENCY_ID_WILLING_SOUL = 1810,
  CURRENCY_ID_RESERVOIR_ANIMA = 1813,
  CURRENCY_ID_RENOWN = 1822,
  CURRENCY_ID_RENOWN_KYRIAN = 1829,
  CURRENCY_ID_RENOWN_VENTHYR = 1830,
  CURRENCY_ID_RENOWN_NIGHT_FAE = 1831,
  CURRENCY_ID_RENOWN_NECROLORD = 1832,
  CLASSIC_ARENA_POINTS_CURRENCY_ID = 1900,
  CLASSIC_HONOR_CURRENCY_ID = 1901,
  QUESTIONMARK_INV_ICON = 134400,
  MAX_CURRENCY_QUANTITY = 100000000,
}
declare enum ITEM_WEAPON_SUBCLASSConstants {
  ITEM_WEAPON_SUBCLASS_NONE = -1,
}
declare enum LevelConstsExposed {
  MIN_RES_SICKNESS_LEVEL = 10,
}
declare enum ProfessionIDs {
  PROFESSION_FIRST_AID = 129,
  PROFESSION_BLACKSMITHING = 164,
  PROFESSION_LEATHERWORKING = 165,
  PROFESSION_ALCHEMY = 171,
  PROFESSION_HERBALISM = 182,
  PROFESSION_COOKING = 185,
  PROFESSION_MINING = 186,
  PROFESSION_TAILORING = 197,
  PROFESSION_ENGINEERING = 202,
  PROFESSION_ENCHANTING = 333,
  PROFESSION_FISHING = 356,
  PROFESSION_SKINNING = 393,
  PROFESSION_JEWELCRAFTING = 755,
  PROFESSION_INSCRIPTION = 773,
  PROFESSION_ARCHAEOLOGY = 794,
}
declare enum PvpInfoConsts {
  MaxPlayersPerInstance = 80,
}
declare enum QuestWatchConsts {
  MAX_WORLD_QUEST_WATCHES_AUTOMATIC = 1,
  MAX_WORLD_QUEST_WATCHES_MANUAL = 5,
  MAX_QUEST_WATCHES = 25,
}
declare enum Transmog {
  MainHandTransmogIsIndividualWeapon = -1,
  MainHandTransmogIsPairedWeapon = 0,
  NoTransmogID = 0,
}
