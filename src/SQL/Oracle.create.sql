﻿



CREATE TABLE "ДокПланЗаНаД"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" NVARCHAR2(255) NULL,

	"Номер" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"СпрПользов" RAW(16) NOT NULL,

	"СпрКонтрАг" RAW(16) NOT NULL,

	"СпрОбъектСтр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрТипТрансСр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Описание" NVARCHAR2(255) NULL,

	"ВместВКубМ" FLOAT(53) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрТранспСр"
(

	"primaryKey" RAW(16) NOT NULL,

	"ГрузПодъемВТон" NVARCHAR2(255) NULL,

	"ГосНомер" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	"ЛицеКартНомер" NUMBER(10) NULL,

	"ВидПеревоз" NVARCHAR2(255) NULL,

	"Марка" NVARCHAR2(255) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрНомен"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Описание" NVARCHAR2(255) NULL,

	"СпрЕдИзмер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПлЗНаД"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВремПриб" DATE NULL,

	"ОбРаб" NVARCHAR2(255) NULL,

	"ОбГруз" FLOAT(53) NULL,

	"СтЗатрат" NVARCHAR2(255) NULL,

	"КолЧас" FLOAT(53) NULL,

	"СпрТипТрансСр" RAW(16) NOT NULL,

	"СпрВидыРаб" RAW(16) NOT NULL,

	"СпрНомен" RAW(16) NOT NULL,

	"СпрТранспСр" RAW(16) NOT NULL,

	"СпрЕдИзмер" RAW(16) NOT NULL,

	"СпрКонтрАг" RAW(16) NOT NULL,

	"ДокПланЗаНаД" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрКонтрАг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"КодПоОКПО" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"КодОКВЭД" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрЕдИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрВидыРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"СпрЕдИзмер" RAW(16) NOT NULL,

	"СпрТипТрансСр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрОбъектСтр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрПользов"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФактВыполРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"СпрПользов" RAW(16) NOT NULL,

	"СпрКонтрАг" RAW(16) NOT NULL,

	"СпрОбъектСтр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ДокПланЗаНаД"
	ADD CONSTRAINT "ДокПланЗаНаД__8523" FOREIGN KEY ("СпрПользов") REFERENCES "СпрПользов" ("primaryKey");

CREATE INDEX "ДокПланЗаНаД__4393" on "ДокПланЗаНаД" ("СпрПользов");

ALTER TABLE "ДокПланЗаНаД"
	ADD CONSTRAINT "ДокПланЗаНаД__8684" FOREIGN KEY ("СпрКонтрАг") REFERENCES "СпрКонтрАг" ("primaryKey");

CREATE INDEX "ДокПланЗаНаД__4298" on "ДокПланЗаНаД" ("СпрКонтрАг");

ALTER TABLE "ДокПланЗаНаД"
	ADD CONSTRAINT "ДокПланЗаНаД__5210" FOREIGN KEY ("СпрОбъектСтр") REFERENCES "СпрОбъектСтр" ("primaryKey");

CREATE INDEX "ДокПланЗаНаД__6910" on "ДокПланЗаНаД" ("СпрОбъектСтр");

ALTER TABLE "СпрНомен"
	ADD CONSTRAINT "СпрНомен_FСпрЕ_737" FOREIGN KEY ("СпрЕдИзмер") REFERENCES "СпрЕдИзмер" ("primaryKey");

CREATE INDEX "СпрНомен_IСпр_9298" on "СпрНомен" ("СпрЕдИзмер");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_1765" FOREIGN KEY ("СпрТипТрансСр") REFERENCES "СпрТипТрансСр" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпр_9792" on "ТЧПлЗНаД" ("СпрТипТрансСр");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_8861" FOREIGN KEY ("СпрВидыРаб") REFERENCES "СпрВидыРаб" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпр_9974" on "ТЧПлЗНаД" ("СпрВидыРаб");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_5815" FOREIGN KEY ("СпрНомен") REFERENCES "СпрНомен" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпр_9401" on "ТЧПлЗНаД" ("СпрНомен");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_7154" FOREIGN KEY ("СпрТранспСр") REFERENCES "СпрТранспСр" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпр_9703" on "ТЧПлЗНаД" ("СпрТранспСр");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_1601" FOREIGN KEY ("СпрЕдИзмер") REFERENCES "СпрЕдИзмер" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпрЕ_708" on "ТЧПлЗНаД" ("СпрЕдИзмер");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FСпр_4131" FOREIGN KEY ("СпрКонтрАг") REFERENCES "СпрКонтрАг" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IСпр_6363" on "ТЧПлЗНаД" ("СпрКонтрАг");

ALTER TABLE "ТЧПлЗНаД"
	ADD CONSTRAINT "ТЧПлЗНаД_FДокП_53" FOREIGN KEY ("ДокПланЗаНаД") REFERENCES "ДокПланЗаНаД" ("primaryKey");

CREATE INDEX "ТЧПлЗНаД_IДок_8772" on "ТЧПлЗНаД" ("ДокПланЗаНаД");

ALTER TABLE "СпрВидыРаб"
	ADD CONSTRAINT "СпрВидыРаб_FС_5946" FOREIGN KEY ("СпрЕдИзмер") REFERENCES "СпрЕдИзмер" ("primaryKey");

CREATE INDEX "СпрВидыРаб_IС_3676" on "СпрВидыРаб" ("СпрЕдИзмер");

ALTER TABLE "СпрВидыРаб"
	ADD CONSTRAINT "СпрВидыРаб_FС_7847" FOREIGN KEY ("СпрТипТрансСр") REFERENCES "СпрТипТрансСр" ("primaryKey");

CREATE INDEX "СпрВидыРаб_IС_5706" on "СпрВидыРаб" ("СпрТипТрансСр");

ALTER TABLE "ФактВыполРаб"
	ADD CONSTRAINT "ФактВыполРаб__4718" FOREIGN KEY ("СпрПользов") REFERENCES "СпрПользов" ("primaryKey");

CREATE INDEX "ФактВыполРаб__8565" on "ФактВыполРаб" ("СпрПользов");

ALTER TABLE "ФактВыполРаб"
	ADD CONSTRAINT "ФактВыполРаб__4879" FOREIGN KEY ("СпрКонтрАг") REFERENCES "СпрКонтрАг" ("primaryKey");

CREATE INDEX "ФактВыполРаб__8470" on "ФактВыполРаб" ("СпрКонтрАг");

ALTER TABLE "ФактВыполРаб"
	ADD CONSTRAINT "ФактВыполРаб__7445" FOREIGN KEY ("СпрОбъектСтр") REFERENCES "СпрОбъектСтр" ("primaryKey");

CREATE INDEX "ФактВыполРаб__3105" on "ФактВыполРаб" ("СпрОбъектСтр");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


