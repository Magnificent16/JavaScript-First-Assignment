function convertWeightToPounds(name, weightKg) {
    var weightLbs = weightKg * 2.20462;
    return name + " weighs " + weightLbs.toFixed(2) + "pounds";
    
    }
    var name = prompt("Input your name");
    var weightKg = prompt("what is Your Weight?");
    var result = convertWeightToPounds(name, weightKg)
    alert(result);