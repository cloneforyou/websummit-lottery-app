export function postEmail(email, discount) {
  let body = {
    contact: {
      Email: email,
      LeadSource: "ReactLive 2019",
      custom: {
        "boolean--rectlive2019--lottery": true,
        "string--From--Path": "ReactLive Lottery app",
        "string--Discount": discount
      }
    }
  };
  return fetch("https://api2.autopilothq.com/v1/contact", {
    method: "POST",
    headers: {
      autopilotapikey: "5a1f31869009404289bc9d63a2b4cca5",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

export function getDiscount() {
  var rand = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  var getRandomItem = function(list, weight) {
    var total_weight = weight.reduce(function(prev, cur, i, arr) {
      return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)

    for (var i = 0; i < list.length; i++) {
      weight_sum += weight[i];
      weight_sum = +weight_sum.toFixed(2);

      if (random_num <= weight_sum) {
        return list[i];
      }
    }

    // end of function
  };

  var lang = ["5% discount", "t-shirt", "t-shirt and 5% discount!"];
  var weight = [0.75, 0.5, 0.25];

  var random_item = getRandomItem(lang, weight);

  console.log(random_item);

  return random_item;
}
