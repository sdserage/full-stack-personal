CREATE TABLE InquiryItems(
    ItemID SERIAL PRIMARY KEY NOT NULL,
    InquiryID INT REFERENCES Inquiries(InquiryID),
    ItemType VARCHAR(20) NOT NULL,
    Media VARCHAR(20),
    Pressure INT,
    Temperature INT,
    Quantity INT,
    PipeSize INT,
    PipeSizeAdditionalInfo VARCHAR(300),
    AdditionalItemInfo VARCHAR(2000),
    ValveSize INT,
    Torque INT,
    ValveDescription VARCHAR(1000),
    StemDimensions VARCHAR(300),
    ReturnType VARCHAR(30),
    ParticulateType VARCHAR(100),
    ParticulateSize INT
);
