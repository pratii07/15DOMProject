const allBtn = document.getElementById('all-btn');
        const breakfastBtn = document.getElementById('B-btn');
        const lunchBtn = document.getElementById('L-btn');
        const shakesBtn = document.getElementById('S-btn');
        const gridItems = document.querySelectorAll('.grid-item');

        allBtn.addEventListener('click', () => {
            gridItems.forEach(item => {
                item.style.display = 'block';
            });
        });

        breakfastBtn.addEventListener('click', () => {
            gridItems.forEach(item => {
                if (item.dataset.category === 'breakfast') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        lunchBtn.addEventListener('click', () => {
            gridItems.forEach(item => {
                if (item.dataset.category === 'lunch') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        shakesBtn.addEventListener('click', () => {
            gridItems.forEach(item => {
                if (item.dataset.category === 'shakes') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });