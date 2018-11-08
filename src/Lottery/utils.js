export function postEmail(email, discount) {
  let body = {
    contact: {
      Email: email,
      LeadSource: "Web Summit 2018",
      custom: {
        "boolean--websummit--lottery": true,
        'string--From--Path': "websummit Lottery app",
        'string--Discount': discount
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

  var lang = ["5", "10", "15"];
  var weight = [0.7, 0.25, 0.05];

  var random_item = getRandomItem(lang, weight);

  console.log(random_item);

  return random_item;
}
