function showRoutine(type) {

    let content = "";

    if (type === "oily") {

        content = `
        <h2 class="skin-title">Oily Skin</h2>

        <h3 class="routine-title">AM Routine</h3>

        <p class="routine-text">
        1. Cleanser-Minimalist 2% Salicylic Acid Cleanser<br>
        2. Niacinamide Serum-Plum 10% Niacinamide Face Serum<br>
        3. Lightweight Moisturizer-Pond's Super Light Gel<br>
        4. Sunscreen-Aqualogica Glow+ Dewy Sunscreen
        </p>

        <h3 class="routine-title">PM Routine</h3>

        <p class="routine-text">
        1. Cleanser-Minimalist 2% Salicylic Acid Cleanser<br>
        2. Moisturizer-Simple Hydrating Light Moisturiser
        </p>
        `;
    }

    else if (type === "dry") {

        content = `
        <h2 class="skin-title">Dry Skin</h2>

        <h3 class="routine-title">AM Routine</h3>

        <p class="routine-text">
        1. Hydrating Cleanser-Cetaphil Gentle Skin Cleanser<br>
        2. Hyaluronic Acid Serum-L'Oreal Paris Revitalift Hyaluronic Acid Serum<br>
        3. Moisturizer-Cetaphil Moisturising Cream<br>
        4. Sunscreen-Fixderma Shadow SPF 50+ Gel
        </p>

        <h3 class="routine-title">PM Routine</h3>

        <p class="routine-text">
        1. Cleanser<br>
        2. Hyaluronic Acid Serum-L'Oreal Paris Revitalift Hyaluronic Acid Serum<br>
        3. Moisturizer-Cetaphil Moisturising Cream
        </p>
        `;
    }

    else if (type === "combination") {

        content = `
        <h2 class="skin-title">Combination Skin</h2>

        <h3 class="routine-title">AM Routine</h3>

        <p class="routine-text">
        1. Gentle Cleanser-Simple Refreshing Face Wash<br>
        2. Niacinamide Serum-Minimalist 5% Niacinamide Serum<br>
        3. Moisturizer-Simple Hydrating Light Moisturiser<br>
        4. Sunscreen-Re'equil Ultra Matte Sunscreen
        </p>

        <h3 class="routine-title">PM Routine</h3>

        <p class="routine-text">
        1. Cleanser-Simple Refreshing Face Wash<br>
        2. Serum-L'Oreal Paris Revitalift Hyaluronic Acid Serum<br>
        3. Moisturizer
        </p>
        `;
    }

    else if (type === "normal") {

        content = `
        <h2 class="skin-title">Normal Skin</h2>

        <h3 class="routine-title">AM Routine</h3>

        <p class="routine-text">
        1. Cleanser-Cetaphil Gentle Skin Cleanser<br>
        2.Vitamin C Serum-Clinique Fresh Pressed Vitamin C Serum<br>
        3. Moisturizer-Dot & Key Barrier Repair Moisturizer<br>
        4. Sunscreen-Beauty of Joseon Relief Sun
        </p>

        <h3 class="routine-title">PM Routine</h3>

        <p class="routine-text">
        1. Cleanser-Cetaphil Gentle Skin Cleanser<br>
        2. Moisturizer
        </p>
        `;
    }

    document.getElementById("routine-box").innerHTML = content;
}