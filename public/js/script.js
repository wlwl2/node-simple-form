{/* <div class="pricing-levels-3">
  <p><strong>Which level would you like? (Select 3 Levels)</strong></p>
  <input class="single-checkbox"type="checkbox" name="vehicle" value="Bike">Level 1<br>
    <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 2<br>
      <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 3<br>
        <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 4<br>
          <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 5<br>
            <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 6<br>
              <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 7<br>
              </div> */}

var limit = 3;
$('input.single-checkbox').on('change', function(evt) {
   if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
   }
});
