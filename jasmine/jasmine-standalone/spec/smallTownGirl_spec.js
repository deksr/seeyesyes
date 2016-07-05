console.log("SmallTownGirl_spec connected")


// matchers in Jasmine
// expect(a).toBe(b);
// expect(a).not.toBe(b);
// expect(a).toMatch(b);
// expect(a).toBeDefined();
// expect(a).toBeNull();
// expect(a).toContain(“value”);
// expect(a).toBeLessThan(b);
// expect(a).toBeTruthy();
// expect(a).toBeFalsy();
// expect(a).not.toBeNull();


describe("oldies playlist", function() {
  it("should play first song", function() {
    expect(firstSong()).toEqual("Just a small Town Girl");
  });
  it("should play second song", function() {
    expect(secondSong()).toEqual("Baby come back - Player");
  });
  it("should play third song", function() {
    expect(thirdSong()).toEqual("Rod Stewart -  Young Turks"); //this fails
  });
});



describe("adding numbers", function() {
	var x = 2;
	var y = 3;

it("should add any two given numbers", function() {
    expect(addNumbers(x,y)).toEqual(7);
  }); //this fails
})