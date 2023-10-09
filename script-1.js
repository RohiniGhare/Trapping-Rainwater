function createPillar(input,pillarContainer){
    const pillar = document.createElement("div");
        pillar.className="pillar";
        pillar.style.backgroundColor="green";
        pillar.style.height=input*20+"px";
        pillar.style.width="30px";
        pillar.style.margin="2px";
        pillar.style.borderStyle="solid";
        pillar.style.borderWidth="1px";
        pillar.style.borderColor="black";
        pillar.style.display="inline-block";
        pillarContainer.appendChild(pillar);
}

function createWater(input,waterContainer){
    const water = document.createElement("div");
        water.className="water";
        water.style.backgroundColor="blue";
        water.style.height=input*20+"px";
        water.style.width="30px";
        water.style.margin="2px";
        water.style.borderStyle="solid";
        water.style.borderWidth="1px";
        water.style.borderColor="black";
        water.style.display="inline-block";
        waterContainer.appendChild(water);
}

function visualizeTrappedWater() {
    const inputArray = document.getElementById("input-array").value.trim().split(" ").map(Number);
    
    const water = trap(inputArray);
    const trappedWater = water.water_arr;
    const pillarContainer = document.getElementById("pillar-container");
    const waterContainer = document.getElementById("water-container");
    const resultElement = document.getElementById("result");

    // Clear previous visualizations
    pillarContainer.innerHTML = "";
    waterContainer.innerHTML = "";

    // Visualize input array
    const h3Pillars = document.createElement("h3");
    h3Pillars.innerText="Input pillars are: ";
    pillarContainer.appendChild(h3Pillars);
    for(let i=0;i<inputArray.length;i++){
            createPillar(inputArray[i],pillarContainer);
    }

    // Visualize trapped water
    const h3Water = document.createElement("h3");
    h3Water.innerText="Trapped water: ";
    pillarContainer.appendChild(h3Water);
    for(let i=0;i<trappedWater.length;i++){
            createWater(trappedWater[i],waterContainer);
    }

    resultElement.innerHTML = `Trapped Water: ${water.total_water}`;
}

function trap(arr) {
    let n = arr.length;
    let res = 0;
    let total_water=0;
    let water_arr = [];
    for(let i = 0; i < n ; i++)
    { 
        let left_max= arr[i];
        for(let j = i - 1; j >= 0; j--)
        {
            left_max = Math.max(left_max, arr[j]);
        }
        let right_max = arr[i];
        for(let j = i + 1; j < n; j++)
        {
            right_max = Math.max(right_max, arr[j]);
        }
        res += Math.min(left_max, right_max) - arr[i];
        total_water +=res;
        water_arr[i]=res;
        res=0;
    }
    return {water_arr,total_water};
}
