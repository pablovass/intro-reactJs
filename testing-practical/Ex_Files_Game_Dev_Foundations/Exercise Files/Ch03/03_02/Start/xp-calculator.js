$('#calculator').submit(function(){
    var level = Number($("#level").val());
    var multiplier = $("#multiplier").val();
    var nextLevel = level + 1;
    var currentXP = calulateNextLevelExp(level, multiplier);
    var nextXP = calulateNextLevelExp(nextLevel, multiplier);
    var diff = nextXP - currentXP;
    $('#output').text("Level " + level + " XP is "+ currentXP+". You need a total of "+nextXP+" XP for level " +nextLevel + ". Gain "+diff+" more XP to reach the next level!");
    return false;
});

function calulateNextLevelExp(level, multiplier){
    return 0;
}