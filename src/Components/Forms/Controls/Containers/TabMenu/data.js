export default [
    {
        ControlName: "cboVNo",
        ControlLabel: "Voucher #",
        ControlDisplayName: "Voucher #",
        ControlElementType: "cbo",
        ControlIndex: 1003,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL: null,
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
    },
    {
        ControlName: "cboVType",
        ControlLabel: "Voucher Type",
        ControlDisplayName: "Voucher Type",
        ControlElementType: "cbo",
        ControlIndex: 1004,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL:
            "Select Code, TypeValue, DisplayCode From CommonCode Where Type='Voucher'",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
        Params: [
            {
                Code: "CR",
                TypeValue: "Cash Received",
                DisplayCode: "1233",
            },
            {
                Code: "CP",
                TypeValue: "Cash Payment",
                DisplayCode: "1233",
            },
            {
                Code: "BR",
                TypeValue: "Bank Received",
                DisplayCode: "1233",
            },
            {
                Code: "BP",
                TypeValue: "Bank Payment",
                DisplayCode: "1233",
            },
            {
                Code: "JV",
                TypeValue: "Transfer/Journal",
                DisplayCode: "1233",
            },
        ],
    },
    {
        ControlName: "cboBatchNo",
        ControlLabel: "Batch #",
        ControlDisplayName: "Batch #",
        ControlElementType: "cbo",
        ControlIndex: 1034,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL:
            "Select Distinct BatchNo From [VoucherData](@ClientCode, @ModuleCode, @LCode, @AType, @ADType, @TType, @TDType, @VDType, @VType, @BatchNo, @VNo)",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
    },
    {
        ControlName: "cboBatchNo",
        ControlLabel: "Batch #",
        ControlDisplayName: "Batch #",
        ControlElementType: "cbo",
        ControlIndex: 1034,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL:
            "Select Distinct BatchNo From [VoucherData](@ClientCode, @ModuleCode, @LCode, @AType, @ADType, @TType, @TDType, @VDType, @VType, @BatchNo, @VNo)",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
    },
    {
        ControlName: "dtpFrom",
        ControlLabel: "Date From",
        ControlDisplayName: "Date From",
        ControlElementType: "dtp",
        ControlIndex: 1320,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL: "Select dbo.[MinVoucherDate]('0010', '0100', '0001')",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
        Params: [
            {
                "": "Jan  1 2018 ",
            },
        ],
    },
    {
        ControlName: "dtpTo",
        ControlLabel: "Date To",
        ControlDisplayName: "Date To",
        ControlElementType: "dtp",
        ControlIndex: 1321,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL: "Select dbo.[MaxVoucherDate]('0010', '0100', '0001')",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
        Params: [
            {
                "": "Oct 11 2019 ",
            },
        ],
    },
    {
        ControlName: "dgvView",
        ControlLabel: null,
        ControlDisplayName: null,
        ControlElementType: "dgv",
        ControlIndex: 1332,
        MenuButton: "View~Print~Help",
        SPName: null,
        ControlSQL:
            "Select CONVERT(varchar(10),VDate,103) As VDATE, VTYPE, BATCHNO, ACode, AHead, VDESC, DEBIT, CREDIT From dbo.DT(@ClientCode, @ModuleCode, @LCode, @GCode, @GLevel, @ACode, @CSCode, @ChqNo, @UserID, @From, @To, @AType, @ADType, @TType, @TDType, @VDType, @VType, @BatchNo, @VNo, @IsVerified) Order By RL, CONVERT(SMALLDATETIME,VDate,101), BatchNo, VNo, TNo",
        ClientCode: "0010",
        IsGridControl: null,
        ModuleCode: "0100",
        GCode: null,
        GLevel: null,
        AType: "",
        ADType: "TRAN",
        TType: "IA",
        TDType: "ACC",
        VDType: "GL",
        VType: "",
        ACode: "040102",
        UIType: "List",
        ALevel: "3",
        PCode: "0401",
        LCode: "0001",
    },
];
