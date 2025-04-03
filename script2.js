const bmi = localStorage.getItem("bmiResult");
if (bmi) {
    document.getElementById("result").innerText = `Your BMI is: ${bmi}`;
    
    let dietInfo = "";
    if (bmi <= 18.5) {
        dietInfo = `
            <h3>Underweight (BMI < 18.5) – High-Calorie, Protein-Rich Diet</h3>
            <p><strong>Meals per day:</strong> 5-6 small meals</p>
            <p><strong>Focus on:</strong> Healthy fats, lean proteins, and complex carbs</p>
            <h4>Foods to eat:</h4>
            <ul>
                <li><strong>Protein:</strong> Eggs, chicken, fish, lentils, dairy</li>
                <li><strong>Carbs:</strong> Whole grains, oats, brown rice, sweet potatoes</li>
                <li><strong>Healthy fats:</strong> Nuts, seeds, avocados, olive oil</li>
                <li><strong>High-calorie fruits:</strong> Bananas, mangoes, dates</li>
                <li><strong>Dairy:</strong> Whole milk, yogurt, cheese</li>
            </ul>
            <h4>Example Meal Plan:</h4>
            <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, nuts, and honey</li>
                <li><strong>Lunch:</strong> Brown rice, chicken curry, and vegetables</li>
                <li><strong>Dinner:</strong> Grilled salmon, quinoa, and salad</li>
                <li><strong>Snacks:</strong> Peanut butter toast, fruit smoothies</li>
            </ul>
        `;
    } 
    else if (bmi > 18.5 && bmi <= 24.9) {
        dietInfo = `
            <h3>Normal Weight (BMI 18.5 - 24.9) – Balanced Diet for Maintenance</h3>
            <p><strong>Meals per day:</strong> 3 main meals + 2 snacks</p>
            <p><strong>Focus on:</strong> Portion control, balanced nutrients</p>
            <h4>Foods to eat:</h4>
            <ul>
                <li><strong>Lean protein:</strong> Chicken, fish, tofu, eggs</li>
                <li><strong>Whole grains:</strong> Brown rice, quinoa, oats</li>
                <li><strong>Vegetables and fruits:</strong> Fiber & vitamins</li>
                <li><strong>Healthy fats:</strong> Nuts, seeds, olive oil</li>
                <li><strong>Dairy:</strong> Low-fat milk, yogurt, cheese</li>
            </ul>
            <h4>Example Meal Plan:</h4>
            <ul>
                <li><strong>Breakfast:</strong> Scrambled eggs, whole wheat toast, and fruit</li>
                <li><strong>Lunch:</strong> Grilled chicken with quinoa and veggies</li>
                <li><strong>Dinner:</strong> Lentil soup with whole wheat bread</li>
                <li><strong>Snacks:</strong> Greek yogurt with berries, almonds</li>
            </ul>
        `;
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
        dietInfo = `
            <h3>Overweight (BMI 25 - 29.9) – Caloric Deficit for Weight Loss</h3>
            <p><strong>Meals per day:</strong> 3 meals + 1 light snack</p>
            <p><strong>Focus on:</strong> High protein, fiber-rich foods, reducing refined carbs</p>
            <h4>Foods to eat:</h4>
            <ul>
                <li><strong>Protein:</strong> Lean meats, legumes, tofu, eggs</li>
                <li><strong>Carbs:</strong> Whole grains, fruits, non-starchy vegetables</li>
                <li><strong>Fats:</strong> Avocados, nuts, olive oil (moderation)</li>
                <li><strong>Dairy:</strong> Low-fat options</li>
            </ul>
            <h4>Example Meal Plan:</h4>
            <ul>
                <li><strong>Breakfast:</strong> Boiled eggs, avocado toast, green tea</li>
                <li><strong>Lunch:</strong> Grilled fish, quinoa, and spinach salad</li>
                <li><strong>Dinner:</strong> Stir-fried vegetables with tofu</li>
                <li><strong>Snacks:</strong> Handful of almonds, herbal tea</li>
            </ul>
            <h4>Additional Tips:</h4>
            <ul>
                <li>Drink plenty of water</li>
                <li>Avoid processed foods and sugary drinks</li>
                <li>Include regular exercise</li>
            </ul>
        `;
    }
    else if (bmi > 29.9) {
        dietInfo = `
            <h3>Obese (BMI ≥ 30) – Strict Low-Calorie Diet for Fat Loss</h3>
            <p><strong>Meals per day:</strong> 3 small meals + 1 healthy snack</p>
            <p><strong>Focus on:</strong> High protein, fiber, very low sugar intake</p>
            <h4>Foods to eat:</h4>
            <ul>
                <li><strong>Lean protein:</strong> Chicken, fish, plant-based sources</li>
                <li><strong>Non-starchy vegetables:</strong> Spinach, broccoli, cucumbers</li>
                <li><strong>Whole grains in moderation:</strong> Brown rice, quinoa</li>
                <li><strong>Healthy fats in small amounts:</strong> Olive oil, nuts</li>
            </ul>
            <h4>Example Meal Plan:</h4>
            <ul>
                <li><strong>Breakfast:</strong> Oats with chia seeds and nuts</li>
                <li><strong>Lunch:</strong> Grilled chicken salad with olive oil dressing</li>
                <li><strong>Dinner:</strong> Vegetable soup with boiled eggs</li>
                <li><strong>Snacks:</strong> Carrot sticks with hummus</li>
            </ul>
            <h4>Additional Tips:</h4>
            <ul>
                <li>Reduce sugar, junk food, and alcohol</li>
                <li>Increase fiber to stay full</li>
                <li>Incorporate daily exercise (cardio + strength training)</li>
            </ul>
        `;
    }

    document.getElementById("bmi1").innerHTML = dietInfo;
    localStorage.removeItem("bmiResult");
}