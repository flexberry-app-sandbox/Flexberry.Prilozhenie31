﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Спр контр аг.
    /// </summary>
    // *** Start programmer edit section *** (СпрКонтрАг CustomAttributes)

    // *** End programmer edit section *** (СпрКонтрАг CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник контрагенты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СпрКонтрАгE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "ИНН as \'ИНН\'",
            "КПП as \'КПП\'",
            "КодОКВЭД as \'КодОКВЭД\'",
            "ОГРН as \'ОГРН\'",
            "КодПоОКПО as \'КодПоОКПО\'",
            "Телефон as \'Телефон\'"})]
    [View("СпрКонтрАгL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "ИНН as \'ИНН\'",
            "КПП as \'КПП\'",
            "КодОКВЭД as \'КодОКВЭД\'",
            "ОГРН as \'ОГРН\'",
            "КодПоОКПО as \'КодПоОКПО\'",
            "Телефон as \'Телефон\'"})]
    public class СпрКонтрАг : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНаименование;
        
        private int fИНН;
        
        private int fКПП;
        
        private int fКодПоОКПО;
        
        private int fОГРН;
        
        private int fКодОКВЭД;
        
        private int fТелефон;
        
        // *** Start programmer edit section *** (СпрКонтрАг CustomMembers)

        // *** End programmer edit section *** (СпрКонтрАг CustomMembers)

        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.ИНН CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.ИНН Get start)

                // *** End programmer edit section *** (СпрКонтрАг.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (СпрКонтрАг.ИНН Get end)

                // *** End programmer edit section *** (СпрКонтрАг.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.ИНН Set start)

                // *** End programmer edit section *** (СпрКонтрАг.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (СпрКонтрАг.ИНН Set end)

                // *** End programmer edit section *** (СпрКонтрАг.ИНН Set end)
            }
        }
        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.Код CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Код Get start)

                // *** End programmer edit section *** (СпрКонтрАг.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (СпрКонтрАг.Код Get end)

                // *** End programmer edit section *** (СпрКонтрАг.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Код Set start)

                // *** End programmer edit section *** (СпрКонтрАг.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (СпрКонтрАг.Код Set end)

                // *** End programmer edit section *** (СпрКонтрАг.Код Set end)
            }
        }
        
        /// <summary>
        /// КодОКВЭД.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.КодОКВЭД CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.КодОКВЭД CustomAttributes)
        public virtual int КодОКВЭД
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КодОКВЭД Get start)

                // *** End programmer edit section *** (СпрКонтрАг.КодОКВЭД Get start)
                int result = this.fКодОКВЭД;
                // *** Start programmer edit section *** (СпрКонтрАг.КодОКВЭД Get end)

                // *** End programmer edit section *** (СпрКонтрАг.КодОКВЭД Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КодОКВЭД Set start)

                // *** End programmer edit section *** (СпрКонтрАг.КодОКВЭД Set start)
                this.fКодОКВЭД = value;
                // *** Start programmer edit section *** (СпрКонтрАг.КодОКВЭД Set end)

                // *** End programmer edit section *** (СпрКонтрАг.КодОКВЭД Set end)
            }
        }
        
        /// <summary>
        /// КодПоОКПО.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.КодПоОКПО CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.КодПоОКПО CustomAttributes)
        public virtual int КодПоОКПО
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КодПоОКПО Get start)

                // *** End programmer edit section *** (СпрКонтрАг.КодПоОКПО Get start)
                int result = this.fКодПоОКПО;
                // *** Start programmer edit section *** (СпрКонтрАг.КодПоОКПО Get end)

                // *** End programmer edit section *** (СпрКонтрАг.КодПоОКПО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КодПоОКПО Set start)

                // *** End programmer edit section *** (СпрКонтрАг.КодПоОКПО Set start)
                this.fКодПоОКПО = value;
                // *** Start programmer edit section *** (СпрКонтрАг.КодПоОКПО Set end)

                // *** End programmer edit section *** (СпрКонтрАг.КодПоОКПО Set end)
            }
        }
        
        /// <summary>
        /// КПП.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.КПП CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.КПП CustomAttributes)
        public virtual int КПП
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КПП Get start)

                // *** End programmer edit section *** (СпрКонтрАг.КПП Get start)
                int result = this.fКПП;
                // *** Start programmer edit section *** (СпрКонтрАг.КПП Get end)

                // *** End programmer edit section *** (СпрКонтрАг.КПП Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.КПП Set start)

                // *** End programmer edit section *** (СпрКонтрАг.КПП Set start)
                this.fКПП = value;
                // *** Start programmer edit section *** (СпрКонтрАг.КПП Set end)

                // *** End programmer edit section *** (СпрКонтрАг.КПП Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.Наименование CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Наименование Get start)

                // *** End programmer edit section *** (СпрКонтрАг.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (СпрКонтрАг.Наименование Get end)

                // *** End programmer edit section *** (СпрКонтрАг.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Наименование Set start)

                // *** End programmer edit section *** (СпрКонтрАг.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (СпрКонтрАг.Наименование Set end)

                // *** End programmer edit section *** (СпрКонтрАг.Наименование Set end)
            }
        }
        
        /// <summary>
        /// ОГРН.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.ОГРН CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.ОГРН CustomAttributes)
        public virtual int ОГРН
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.ОГРН Get start)

                // *** End programmer edit section *** (СпрКонтрАг.ОГРН Get start)
                int result = this.fОГРН;
                // *** Start programmer edit section *** (СпрКонтрАг.ОГРН Get end)

                // *** End programmer edit section *** (СпрКонтрАг.ОГРН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.ОГРН Set start)

                // *** End programmer edit section *** (СпрКонтрАг.ОГРН Set start)
                this.fОГРН = value;
                // *** Start programmer edit section *** (СпрКонтрАг.ОГРН Set end)

                // *** End programmer edit section *** (СпрКонтрАг.ОГРН Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (СпрКонтрАг.Телефон CustomAttributes)

        // *** End programmer edit section *** (СпрКонтрАг.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Телефон Get start)

                // *** End programmer edit section *** (СпрКонтрАг.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (СпрКонтрАг.Телефон Get end)

                // *** End programmer edit section *** (СпрКонтрАг.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрКонтрАг.Телефон Set start)

                // *** End programmer edit section *** (СпрКонтрАг.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (СпрКонтрАг.Телефон Set end)

                // *** End programmer edit section *** (СпрКонтрАг.Телефон Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СпрКонтрАгE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрКонтрАгE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрКонтрАгE", typeof(IIS.Prilozhenie_3.СпрКонтрАг));
                }
            }
            
            /// <summary>
            /// "СпрКонтрАгL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрКонтрАгL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрКонтрАгL", typeof(IIS.Prilozhenie_3.СпрКонтрАг));
                }
            }
        }
    }
}
