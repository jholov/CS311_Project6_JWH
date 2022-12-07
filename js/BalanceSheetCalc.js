let CurrentTotalAssets = 0;
let InvestmentPropTotal = 0;
let IntangiblesTotal = 0;
let CurLiabilitiesTotal = 0;
let LongLiabilitiesTotal = 0;
let TotalAssets = 0;
let TotalLiabilities = 0;
let Position = 0;
let moneyFormat = Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD",
});


function addAssets()
{
    //adds Cash: label
    let newCash = document.createElement("label");
    newCash.setAttribute("id","current");
    newCash.innerHTML=("Cash:");
    const assetLoc = document.getElementById("current");
    assetLoc.appendChild(newCash);

    //adds Cash input
    let cashInput = document.createElement("input");
    cashInput.setAttribute("type","number");
    cashInput.setAttribute("id","curCash");
    assetLoc.appendChild(cashInput);

    //adds Inventory: label
    let newInv = document.createElement("label");
    newInv.setAttribute("id","current");
    newInv.innerHTML=("Inventory:");
    assetLoc.appendChild(newInv);

    //adds Inventory input
    let invInput = document.createElement("input");
    invInput.setAttribute("type","number");
    invInput.setAttribute("id","curInv");
    assetLoc.appendChild(invInput);

    //adds Supplies: label
    let newSupplies = document.createElement("label");
    newSupplies.setAttribute("id","current");
    newSupplies.innerHTML=("Supplies:");
    assetLoc.appendChild(newSupplies);

    //adds Supplies input
    let supInput = document.createElement("input");
    supInput.setAttribute("type","number");
    supInput.setAttribute("id","curSup");
    assetLoc.appendChild(supInput);

    //adds Temporary Investments: label
    let newTemp = document.createElement("label");
    newTemp.setAttribute("id","current");
    newTemp.innerHTML=("Temporary Investments:");
    assetLoc.appendChild(newTemp);

    //adds Temporary Investments input
    let tempInput = document.createElement("input");
    tempInput.setAttribute("type","number");
    tempInput.setAttribute("id","curTemp");
    assetLoc.appendChild(tempInput);

    //creates Total Current Asset label and output
    let newTotal = document.createElement("label");
    newTotal.setAttribute("id","total");
    newTotal.setAttribute("class","totlabel");
    newTotal.innerHTML=("Total Current Assets:");
    assetLoc.appendChild(newTotal);
    var displayTotal = document.createElement("label");
    displayTotal.setAttribute("id","totalCurrentAsset");
    assetLoc.appendChild(displayTotal);

    //removes Add Current Asset Button when clicked
    let delAssetBut = document.getElementById("addAsset");
    delAssetBut.parentNode.removeChild(delAssetBut);
}

function addPropEquip()
{
    //adds Land: label
    let newLand = document.createElement("label");
    newLand.setAttribute("id","prop");
    newLand.innerHTML=("Land:");
    const propLoc = document.getElementById("prop");
    propLoc.appendChild(newLand);

    //adds Land input
    let landInput = document.createElement("input");
    landInput.setAttribute("type","number");
    landInput.setAttribute("id","propLand");
    propLoc.appendChild(landInput);

    //adds Building and Improvements: label
    let newBuild = document.createElement("label");
    newBuild.setAttribute("id","prop");
    newBuild.innerHTML=("Building and Improvements:");
    propLoc.appendChild(newBuild);

    //adds Building and Improvements input 
    let buildInput = document.createElement("input");
    buildInput.setAttribute("type","number");
    buildInput.setAttribute("id","propBuild");
    propLoc.appendChild(buildInput);

    //adds Equipment: label
    let newEquip = document.createElement("label");
    newEquip.setAttribute("id","prop");
    newEquip.innerHTML=("Equipment:");
    propLoc.appendChild(newEquip);

    //adds Equipment input
    let equipInput = document.createElement("input");
    equipInput.setAttribute("type","number");
    equipInput.setAttribute("id","propEquip");
    propLoc.appendChild(equipInput);

    //adds Temporary Investment: label
    let newTemp = document.createElement("label");
    newTemp.setAttribute("id","prop");
    newTemp.innerHTML=("Temporary Investments:");
    propLoc.appendChild(newTemp);

    //adds Temporary Investment input
    let tempInput = document.createElement("input");
    tempInput.setAttribute("type","number");
    tempInput.setAttribute("id","propTemp");
    propLoc.appendChild(tempInput);

    //creates Total Investment Prop & Equip label and output
    let newTotal = document.createElement("label");
    newTotal.setAttribute("id","total");
    newTotal.setAttribute("class","totlabel");
    newTotal.innerHTML=("Total Investment Property and Equipment:");
    propLoc.appendChild(newTotal);
    var displayPropTotal = document.createElement("label");
    displayPropTotal.setAttribute("id","totalPropEquip");
    propLoc.appendChild(displayPropTotal);

    //removes Add Investment Prop & Equip button when clicked
    let delPropBut = document.getElementById("addProp");
    delPropBut.parentNode.removeChild(delPropBut);

}

function addIntang()
{
    //adds Trade Names: label
    let newTrade = document.createElement("label");
    newTrade.setAttribute("id","intang");
    newTrade.innerHTML=("Trade Names:");
    const intangLoc = document.getElementById("intang");
    intangLoc.appendChild(newTrade);

    //adds Trade Name input
    let tradeInput = document.createElement("input");
    tradeInput.setAttribute("type","number");
    tradeInput.setAttribute("id","intangTrade");
    intangLoc.appendChild(tradeInput);

    //adds Goodwill: label
    let newGoodwill = document.createElement("label");
    newGoodwill.setAttribute("id","intang");
    newGoodwill.innerHTML=("Goodwill:");
    intangLoc.appendChild(newGoodwill);

    //adds Goodwill input
    let goodwillInput = document.createElement("input");
    goodwillInput.setAttribute("type","number");
    goodwillInput.setAttribute("id","intangGoodwill");
    intangLoc.appendChild(goodwillInput);

    //creates Total Intangibles label and output
    let newTotal = document.createElement("label");
    newTotal.setAttribute("id","total");
    newTotal.setAttribute("class","totlabel");
    newTotal.innerHTML=("Total Intangibles:");
    intangLoc.appendChild(newTotal);
    var displayIntangTotal = document.createElement("label");
    displayIntangTotal.setAttribute("id","totalIntang");
    intangLoc.appendChild(displayIntangTotal);

    //removes Add Intangibles button when clicked
    let delIntangBut = document.getElementById("addIntang");
    delIntangBut.parentNode.removeChild(delIntangBut);

}

function addCurLiabilities()
{
    //adds Accounts Payable: label
    let newAccounts = document.createElement("label");
    newAccounts.setAttribute("id","currentLiab");
    newAccounts.innerHTML=("Accounts Payable:");
    const currentLiabLoc = document.getElementById("currentLiab");
    currentLiabLoc.appendChild(newAccounts);

    //adds Accounts Payable input
    let accountsInput = document.createElement("input");
    accountsInput.setAttribute("type","number");
    accountsInput.setAttribute("id","liabAccounts");
    currentLiabLoc.appendChild(accountsInput);

    //adds Notes Payable: label
    let newNotes = document.createElement("label");
    newNotes.setAttribute("id","curreantLiab");
    newNotes.innerHTML=("Notes Payable:");
    currentLiabLoc.appendChild(newNotes);

    //adds Notes Payable input
    let notesInput = document.createElement("input");
    notesInput.setAttribute("type","number");
    notesInput.setAttribute("id","liabNotes");
    currentLiabLoc.appendChild(notesInput);

    //adds Interest Payable: label
    let newInterest = document.createElement("label");
    newInterest.setAttribute("id","curreantLiab");
    newInterest.innerHTML=("Interest Payable:");
    currentLiabLoc.appendChild(newInterest);

    //adds Interest Payable input
    let interestInput = document.createElement("input");
    interestInput.setAttribute("type","number");
    interestInput.setAttribute("id","liabInterest");
    currentLiabLoc.appendChild(interestInput);

    //adds Wages Payable: label
    let newWages = document.createElement("label");
    newWages.setAttribute("id","curreantLiab");
    newWages.innerHTML=("Wages Payable:");
    currentLiabLoc.appendChild(newWages);

    //adds Wages Payable input
    let wagesInput = document.createElement("input");
    wagesInput.setAttribute("type","number");
    wagesInput.setAttribute("id","liabWages");
    currentLiabLoc.appendChild(wagesInput);

    //adds Accrued Expenses: label
    let newAccrued = document.createElement("label");
    newAccrued.setAttribute("id","curreantLiab");
    newAccrued.innerHTML=("Accrued Expenses:");
    currentLiabLoc.appendChild(newAccrued);

    //adds Accrued Expenses input
    let accruedInput = document.createElement("input");
    accruedInput.setAttribute("type","number");
    accruedInput.setAttribute("id","liabAccrued");
    currentLiabLoc.appendChild(accruedInput);

    //creates Total Current Liabilities label and output
    let newTotal = document.createElement("label");
    newTotal.setAttribute("id","total");
    newTotal.setAttribute("class","totlabel");
    newTotal.innerHTML=("Total Current Liabilities:");
    currentLiabLoc.appendChild(newTotal);
    var displayCurLiabTotal = document.createElement("label");
    displayCurLiabTotal.setAttribute("id","totalCurLiab");
    currentLiabLoc.appendChild(displayCurLiabTotal);

    //removes Add Current Liabilities button when clicked
    let delCurLiabilitiesBut = document.getElementById("addCurLiabilities");
    delCurLiabilitiesBut.parentNode.removeChild(delCurLiabilitiesBut);

}

function addLongLiabilities()
{
    //adds Notes Payable: label
    let newNotes = document.createElement("label");
    newNotes.setAttribute("id","longLiab");
    newNotes.innerHTML=("Notes Payable:");
    const longLiabLoc = document.getElementById("longLiab");
    longLiabLoc.appendChild(newNotes);

    //adds Notes Payable input
    let notesInput = document.createElement("input");
    notesInput.setAttribute("type","number");
    notesInput.setAttribute("id","longNotes");
    longLiabLoc.appendChild(notesInput);

    //adds Bonds Payable: label
    let newBonds = document.createElement("label");
    newBonds.setAttribute("id","longLiab");
    newBonds.innerHTML=("Bonds Payable:");
    longLiabLoc.appendChild(newBonds);

    //adds Bond Payable input
    let bondsInput = document.createElement("input");
    bondsInput.setAttribute("type","number");
    bondsInput.setAttribute("id","longBonds");
    longLiabLoc.appendChild(bondsInput);

    //creates Total Long-Term Liabilities label and output
    let newTotal = document.createElement("label");
    newTotal.setAttribute("id","total");
    newTotal.setAttribute("class","totlabel");
    newTotal.innerHTML=("Total Long-Term Liabilities:");
    longLiabLoc.appendChild(newTotal);
    var displayLongLiabTotal = document.createElement("label");
    displayLongLiabTotal.setAttribute("id","totalLongLiab");
    longLiabLoc.appendChild(displayLongLiabTotal);

    //removes Add Current Asset Button when clicked
    let delLongBut = document.getElementById("addLongLiabilities");
    delLongBut.parentNode.removeChild(delLongBut);
}

function calTotalPosition()
{
    //calculates Current Assets Total
    let totCash = document.getElementById("curCash").value;
    let totInv = document.getElementById("curInv").value;
    let totSupplies = document.getElementById("curSup").value;
    let totTempInvest = document.getElementById("curTemp").value;

    CurrentTotalAssets += parseFloat(totCash);
    CurrentTotalAssets += parseFloat(totInv);
    CurrentTotalAssets += parseFloat(totSupplies);
    CurrentTotalAssets += parseFloat(totTempInvest);

    document.getElementById("totalCurrentAsset").innerHTML = moneyFormat.format(CurrentTotalAssets);

    //calculates Investment Property & Equipment Total
    let totLand = document.getElementById("propLand").value;
    let totBuilding = document.getElementById("propBuild").value;
    let totEquipment = document.getElementById("propEquip").value;
    let totTemp = document.getElementById("propTemp"). value;

    InvestmentPropTotal += parseFloat(totLand);
    InvestmentPropTotal += parseFloat(totBuilding);
    InvestmentPropTotal += parseFloat(totEquipment);
    InvestmentPropTotal += parseFloat(totTemp);

    document.getElementById("totalPropEquip").innerHTML = moneyFormat.format(InvestmentPropTotal);

    //calculates Intangibles Total
    let totTrade = document.getElementById("intangTrade").value;
    let totGoodwill = document.getElementById("intangGoodwill").value;

    IntangiblesTotal += parseFloat(totTrade);
    IntangiblesTotal += parseFloat(totGoodwill);

    document.getElementById("totalIntang").innerHTML = moneyFormat.format(IntangiblesTotal);

    //calculates Current Liabilities Total
    let totAccounts = document.getElementById("liabAccounts").value;
    let totNotes = document.getElementById("liabNotes").value;
    let totInterest = document.getElementById("liabInterest").value;
    let totWages = document.getElementById("liabWages").value;
    let totAccrued = document.getElementById("liabAccrued").value;

    CurLiabilitiesTotal += parseFloat(totAccounts);
    CurLiabilitiesTotal += parseFloat(totNotes);
    CurLiabilitiesTotal += parseFloat(totInterest);
    CurLiabilitiesTotal += parseFloat(totWages);
    CurLiabilitiesTotal += parseFloat(totAccrued);

    
    document.getElementById("totalCurLiab").innerHTML = moneyFormat.format(CurLiabilitiesTotal);

    //calculates Long Term Liabilities Total
    let totLongNotes = document.getElementById("longNotes").value
    let totBonds = document.getElementById("longBonds").value

    LongLiabilitiesTotal += parseFloat(totLongNotes);
    LongLiabilitiesTotal += parseFloat(totBonds);

    document.getElementById("totalLongLiab").innerHTML = moneyFormat.format(LongLiabilitiesTotal);

    //calculates and creates label for Total Assets
    let totalAssetsLabel = document.createElement("label");
    totalAssetsLabel.setAttribute("id","displaytotassets");
    const totalAssetsLoc = document.getElementById("totalAssets");
    totalAssetsLoc.appendChild(totalAssetsLabel);

    TotalAssets = CurrentTotalAssets + InvestmentPropTotal + IntangiblesTotal;

    document.getElementById("displaytotassets").innerHTML = moneyFormat.format(TotalAssets);

    //calculates and creates label for Total Liabilities
    let totalLiabLabel = document.createElement("label");
    totalLiabLabel.setAttribute("id","displaytotliab");
    const totalLiabLoc = document.getElementById("totalLiabilities");
    totalLiabLoc.appendChild(totalLiabLabel);

    TotalLiabilities = CurLiabilitiesTotal + LongLiabilitiesTotal;

    document.getElementById("displaytotliab").innerHTML = moneyFormat.format(TotalLiabilities);
    
    let positionLabel = document.createElement("label");
    positionLabel.setAttribute("id","displayposition");
    const positionLoc = document.getElementById("totalPostion");
    positionLoc.appendChild(positionLabel);

    Position = TotalAssets - TotalLiabilities;

    document.getElementById("displayposition").innerHTML = moneyFormat.format(Position);    

    //removes Calculate Position button when clicked
    let delCalPosBut = document.getElementById("calPosition");
    delCalPosBut.parentNode.removeChild(delCalPosBut);

}