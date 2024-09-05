function searchProduct(event) {
    event.preventDefault(); 
    let searchInput = document.querySelector('#searchInput input[type="search"]').value.trim().toLowerCase();
    const productPages = {
        'fashion' : 'fashion.html',
        'electronic' : 'electronic.html',
        'makeup' : 'makeup.html',
        'cap': 'capdetails.html',
        'laptop': 'AllLaptopDetails.html',
        'kajal': 'AllKajalDetails.html', 
        'linear' : 'lineardetails.html',
        'mouse' : 'mousedetails.html',
        'headphone' : 'headphonedetails.html',
        'mobile' : 'AllPhoneDetails.html',
        'hoodie' : 'redhoodie.html',  
        'jacket' : 'jacketdetails.html',
        'foundation' : 'foundationdetails.html',
        'eyeshadow' : 'eyeShadow.html',
        'earbud' : 'earbuddetails.html',
        'lipstick' : 'AllLipstickDetail.html',
        'cream' : 'fairAndLovely.html',
        'coat' : 'coatdetails.html',
        'mask' : 'facialMask.html',
        'shirt' : 'AllShirtDetails.html',
        'phone' : 'AllPhoneDetails.html',
        'watch' : 'AllWatchDetails.html',
        'bag' : 'AllBegDetails.html',  
        'trouser' : 'trouserdetails.html',
        'soap' : 'soap.html',
        'shoes' : 'shoesdetail.html',
        'purse' : 'pursedetails.html',
        'mascara' : 'mascara.html',  
        'top' : 'AllTopDetails.html',
    };

    // Function to find the closest match
    function findClosestMatch(input, options) {
        let closestMatch = '';
        let closestDistance = Infinity;

        for (let option in options) {
            const distance = levenshteinDistance(input, option);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestMatch = option;
            }
        }

        return closestMatch;
    }

    // Levenshtein Distance Algorithm
    function levenshteinDistance(a, b) {
        const matrix = [];

        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }

        return matrix[b.length][a.length];
    }

    let correctedInput = findClosestMatch(searchInput, productPages);
    if (correctedInput !== searchInput) {
        const confirmCorrection = confirm(`Did you mean "${correctedInput}"?`);
        if (confirmCorrection) {
            searchInput = correctedInput; // Update searchInput to corrected value
        }
    }

    if (productPages[searchInput]) {
        window.location.href = productPages[searchInput];
    } else {
        alert('Product not found!');
    }
}