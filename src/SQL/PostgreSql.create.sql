




CREATE TABLE ДокПланЗаНаД (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Номер INT NULL,
 Дата TIMESTAMP(3) NULL,
 СпрПользов UUID NOT NULL,
 СпрКонтрАг UUID NOT NULL,
 СпрОбъектСтр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрТипТрансСр (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Описание VARCHAR(255) NULL,
 ВместВКубМ REAL NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрТранспСр (
 primaryKey UUID NOT NULL,
 ГрузПодъемВТон VARCHAR(255) NULL,
 ГосНомер VARCHAR(255) NULL,
 Код INT NULL,
 ЛицеКартНомер INT NULL,
 ВидПеревоз VARCHAR(255) NULL,
 Марка VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрНомен (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 Описание VARCHAR(255) NULL,
 СпрЕдИзмер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПлЗНаД (
 primaryKey UUID NOT NULL,
 ВремПриб TIMESTAMP(3) NULL,
 ОбРаб VARCHAR(255) NULL,
 ОбГруз REAL NULL,
 СтЗатрат VARCHAR(255) NULL,
 КолЧас REAL NULL,
 СпрТипТрансСр UUID NOT NULL,
 СпрВидыРаб UUID NOT NULL,
 СпрНомен UUID NOT NULL,
 СпрТранспСр UUID NOT NULL,
 СпрЕдИзмер UUID NOT NULL,
 СпрКонтрАг UUID NOT NULL,
 ДокПланЗаНаД UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрКонтрАг (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 КодПоОКПО INT NULL,
 ОГРН INT NULL,
 КодОКВЭД INT NULL,
 Телефон INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрЕдИзмер (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрВидыРаб (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 СпрЕдИзмер UUID NOT NULL,
 СпрТипТрансСр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрОбъектСтр (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрПользов (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Код INT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФактВыполРаб (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Дата TIMESTAMP(3) NULL,
 Время VARCHAR(255) NULL,
 СпрПользов UUID NOT NULL,
 СпрКонтрАг UUID NOT NULL,
 СпрОбъектСтр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FK81fbb905ae7456eaeeaa1838ff132654ebc92ff2 FOREIGN KEY (СпрПользов) REFERENCES СпрПользов; 
CREATE INDEX Index81fbb905ae7456eaeeaa1838ff132654ebc92ff2 on ДокПланЗаНаД (СпрПользов); 

 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FK312a63ff4426c60c29aa41a1e1582c94c0bcc09a FOREIGN KEY (СпрКонтрАг) REFERENCES СпрКонтрАг; 
CREATE INDEX Index312a63ff4426c60c29aa41a1e1582c94c0bcc09a on ДокПланЗаНаД (СпрКонтрАг); 

 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FKffa0aecf8e314e28f0eadc399661f74c23f443d7 FOREIGN KEY (СпрОбъектСтр) REFERENCES СпрОбъектСтр; 
CREATE INDEX Indexffa0aecf8e314e28f0eadc399661f74c23f443d7 on ДокПланЗаНаД (СпрОбъектСтр); 

 ALTER TABLE СпрНомен ADD CONSTRAINT FK840c81fedf20e0a82183dd6fd7f6953d4bf35c43 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index840c81fedf20e0a82183dd6fd7f6953d4bf35c43 on СпрНомен (СпрЕдИзмер); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK7ae6acdd0339c7f804a060b9fe67c2e3b4debd8f FOREIGN KEY (СпрТипТрансСр) REFERENCES СпрТипТрансСр; 
CREATE INDEX Index7ae6acdd0339c7f804a060b9fe67c2e3b4debd8f on ТЧПлЗНаД (СпрТипТрансСр); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FKac908761c6de9cbe037d803cfb4b1e1fee681a00 FOREIGN KEY (СпрВидыРаб) REFERENCES СпрВидыРаб; 
CREATE INDEX Indexac908761c6de9cbe037d803cfb4b1e1fee681a00 on ТЧПлЗНаД (СпрВидыРаб); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK6923d9791df1697b1a5e64cb30e0b07da2c68fdf FOREIGN KEY (СпрНомен) REFERENCES СпрНомен; 
CREATE INDEX Index6923d9791df1697b1a5e64cb30e0b07da2c68fdf on ТЧПлЗНаД (СпрНомен); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK1b0af8dde00e9e6666b6dd46db26821a6e4bac81 FOREIGN KEY (СпрТранспСр) REFERENCES СпрТранспСр; 
CREATE INDEX Index1b0af8dde00e9e6666b6dd46db26821a6e4bac81 on ТЧПлЗНаД (СпрТранспСр); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK8fa3f7ff4218de74f2a401ee088cf71386be5937 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index8fa3f7ff4218de74f2a401ee088cf71386be5937 on ТЧПлЗНаД (СпрЕдИзмер); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FKc68eeee92fec27be705024a03c2f90e0995b68a2 FOREIGN KEY (СпрКонтрАг) REFERENCES СпрКонтрАг; 
CREATE INDEX Indexc68eeee92fec27be705024a03c2f90e0995b68a2 on ТЧПлЗНаД (СпрКонтрАг); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK03d677498857c017bb3c050822879fa2032345bb FOREIGN KEY (ДокПланЗаНаД) REFERENCES ДокПланЗаНаД; 
CREATE INDEX Index03d677498857c017bb3c050822879fa2032345bb on ТЧПлЗНаД (ДокПланЗаНаД); 

 ALTER TABLE СпрВидыРаб ADD CONSTRAINT FK105cacd2a93f6230c3c135143070c3ef1c4dd0c1 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index105cacd2a93f6230c3c135143070c3ef1c4dd0c1 on СпрВидыРаб (СпрЕдИзмер); 

 ALTER TABLE СпрВидыРаб ADD CONSTRAINT FKa7034f7bceece13908821312b7a842afbbddb0e3 FOREIGN KEY (СпрТипТрансСр) REFERENCES СпрТипТрансСр; 
CREATE INDEX Indexa7034f7bceece13908821312b7a842afbbddb0e3 on СпрВидыРаб (СпрТипТрансСр); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK12f57b966e1b354c1cdd7e8e266a16ab4d8c39e6 FOREIGN KEY (СпрПользов) REFERENCES СпрПользов; 
CREATE INDEX Index12f57b966e1b354c1cdd7e8e266a16ab4d8c39e6 on ФактВыполРаб (СпрПользов); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK81586eaea9379c49d51cbe0d2616678d2dbc9dd3 FOREIGN KEY (СпрКонтрАг) REFERENCES СпрКонтрАг; 
CREATE INDEX Index81586eaea9379c49d51cbe0d2616678d2dbc9dd3 on ФактВыполРаб (СпрКонтрАг); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK1525f936f2d5cde4b9d2f8856f713afc7497267a FOREIGN KEY (СпрОбъектСтр) REFERENCES СпрОбъектСтр; 
CREATE INDEX Index1525f936f2d5cde4b9d2f8856f713afc7497267a on ФактВыполРаб (СпрОбъектСтр); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

