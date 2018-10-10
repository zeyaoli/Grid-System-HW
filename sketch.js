var margin = 20;

function setup() {
  createCanvas(500, 700);
  background(240);

  var bgGrid = new EasyGrid({
    x: 0,
    y: 0,
    width: width,
    height: height,
    gutter: 0,
    columns: 1,
    rows: 3
  });

  var grid = new EasyGrid({
    x: margin,
    y: margin,
    width: width - margin * 2,
    height: height - margin * 2,
    gutter: 20,
    columns: 2,
    rows: 3
  });

  var gridSmall = new EasyGrid({
    x: margin,
    y: margin,
    width: width - margin * 2,
    height: height - margin * 2,
    gutter: 0,
    columns: 2,
    rows: 18
  });

  noStroke();

  for (var i = 0; i < bgGrid.modules.length; i++) {
    var modBG = bgGrid.modules[i];
    fill(random(255), random(255), random(255));
    rect(modBG.x, modBG.y, modBG.width, modBG.height);
    console.log(modBG.x);
  }


  noFill();
  noStroke();

  for (var i = 0; i < gridSmall.modules.length; i++) {
    var mod = gridSmall.modules[i];
    rect(mod.x, mod.y, mod.width, mod.height);

    push();
    fill(255);
    //left top
    rect(gridSmall.modules[4].x + 55, gridSmall.modules[4].y, gridSmall.modules[4].width / 2 + 40, gridSmall.modules[4].height);
    rect(gridSmall.modules[6].x + gridSmall.modules[6].width / 2, gridSmall.modules[6].y, gridSmall.modules[6].width / 2 - 20, gridSmall.modules[6].height);
    pop();

    push();
    fill(0);
    //right top
    rect(gridSmall.modules[3].x, gridSmall.modules[3].y, gridSmall.modules[3].width / 2 + 10, gridSmall.modules[3].height);
    rect(gridSmall.modules[5].x, gridSmall.modules[5].y, gridSmall.modules[5].width / 2 + 40, gridSmall.modules[5].height);
    rect(gridSmall.modules[7].x, gridSmall.modules[7].y, gridSmall.modules[7].width / 2 + 15, gridSmall.modules[7].height);
    pop();

    push();
    fill(0);
    //left middle
    rect(gridSmall.modules[20].x + gridSmall.modules[20].width / 2 - 20, gridSmall.modules[20].y, gridSmall.modules[20].width / 2, gridSmall.modules[20].height);
    rect(gridSmall.modules[22].x + gridSmall.modules[22].width / 2 - 20, gridSmall.modules[22].y, gridSmall.modules[22].width / 2, gridSmall.modules[22].height / 2);

    //right middle
    rect(gridSmall.modules[13].x, gridSmall.modules[13].y + gridSmall.modules[13].height / 2, gridSmall.modules[13].width / 2 + 30, gridSmall.modules[13].height / 2);
    rect(gridSmall.modules[15].x, gridSmall.modules[15].y, gridSmall.modules[15].width / 2 + 30, gridSmall.modules[15].height / 2);
    rect(gridSmall.modules[17].x, gridSmall.modules[17].y, gridSmall.modules[17].width / 2 + 25, gridSmall.modules[17].height);
    rect(gridSmall.modules[19].x, gridSmall.modules[19].y, gridSmall.modules[19].width / 2 + 25, gridSmall.modules[19].height / 2);

    rect(gridSmall.modules[21].x, gridSmall.modules[21].y, gridSmall.modules[21].width / 2, gridSmall.modules[21].height);
    rect(gridSmall.modules[23].x, gridSmall.modules[23].y, gridSmall.modules[23].width / 2, gridSmall.modules[23].height / 2);
    pop();

    push();
    fill(0);
    //left bottom
    rect(gridSmall.modules[24].x + gridSmall.modules[24].width / 2 + 20, gridSmall.modules[24].y + gridSmall.modules[24].height / 2, gridSmall.modules[24].width / 2 - 40, gridSmall.modules[24].height / 2);
    rect(gridSmall.modules[26].x + gridSmall.modules[26].width / 2 + 20, gridSmall.modules[26].y, gridSmall.modules[26].width / 2 - 40, gridSmall.modules[26].height / 2);

    rect(gridSmall.modules[30].x + gridSmall.modules[30].width / 2 - 20, gridSmall.modules[30].y + gridSmall.modules[30].height / 2, gridSmall.modules[30].width / 2, gridSmall.modules[30].height / 2);
    rect(gridSmall.modules[32].x + gridSmall.modules[32].width / 2 - 20, gridSmall.modules[32].y, gridSmall.modules[32].width / 2, gridSmall.modules[32].height);

    //right bottom
    rect(gridSmall.modules[25].x, gridSmall.modules[25].y + gridSmall.modules[25].height / 2, gridSmall.modules[25].width / 2 + 40, gridSmall.modules[25].height / 2);
    rect(gridSmall.modules[27].x, gridSmall.modules[27].y, gridSmall.modules[27].width / 2 + 40, gridSmall.modules[27].height / 2);
    rect(gridSmall.modules[29].x, gridSmall.modules[29].y, gridSmall.modules[29].width / 2 + 30, gridSmall.modules[29].height);

    rect(gridSmall.modules[31].x, gridSmall.modules[31].y + gridSmall.modules[31].height / 2, gridSmall.modules[31].width / 2, gridSmall.modules[31].height / 2);
    rect(gridSmall.modules[33].x, gridSmall.modules[33].y, gridSmall.modules[33].width / 2, gridSmall.modules[33].height);


    pop();


  }

}

function draw() {

}