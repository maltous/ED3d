function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iRy0uNLC6C":
        Script1();
        break;
      case "5xGgLMuMi9u":
        Script2();
        break;
      case "6YUIE6CHQqL":
        Script3();
        break;
      case "6XPrSV4korJ":
        Script4();
        break;
      case "5WhhE3Ztv8K":
        Script5();
        break;
      case "6gvWYZyiFwQ":
        Script6();
        break;
      case "5Vw23Re7rb5":
        Script7();
        break;
      case "67j81RRn2jf":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

