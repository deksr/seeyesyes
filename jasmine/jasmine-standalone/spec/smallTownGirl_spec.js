console.log("SmallTownGirl_spec connected")


describe("Hits-the-chord playlist", function() {
  it("should play first song", function() {
    expect(firstSong()).toEqual("Just a small Town Girl");
  });
  it("should play second song", function() {
    expect(secondSong()).toEqual("Yo gotti- Cold blood");
  });
  it("should play third song", function() {
    expect(thirdSong()).toEqual("?????");
  });
});