document.addEventListener('DOMContentLoaded', function() { 
    const menuToggle = document.getElementById('menu-toggle'); 
    const themeToggle = document.getElementById('theme-toggle'); 
    const sidebar = document.getElementById('sidebar'); 
    const gradientForm = document.getElementById('gradient-form'); 
    const gradientPreview = document.getElementById('gradient-preview'); 
    const gradientCode = document.getElementById('gradient-code'); 
     
    const color1Input = document.getElementById('color1'); 
    const color2Input = document.getElementById('color2'); 
    const color3Input = document.getElementById('color3'); 
     
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('active')); 
     
    document.querySelectorAll('#sidebar a').forEach(link => { 
        link.addEventListener('click', () => sidebar.classList.remove('active')); 
    }); 
      
    document.addEventListener('click', (event) => { 
        if (!sidebar.contains(event.target) && event.target !== menuToggle && 
!menuToggle.contains(event.target)) { 
            sidebar.classList.remove('active'); 
        } 
    }); 
      
    themeToggle.addEventListener('click', () => { 
        document.body.classList.toggle('dark-mode'); 
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 
'dark' : 'light'); 
    }); 
      
    if (localStorage.getItem('theme') === 'dark') { 
        document.body.classList.add('dark-mode'); 
    } 
      
    const validateAndUpdate = (event) => { 
        if (event) event.preventDefault(); 
          
        let isValid = true; 
         
        if (!color1Input.value) { 
            color1Error.textContent = 'El PRIMER COLOR es obligatorio'; 
            isValid = false; 
        } else { 
            color1Error.textContent = ''; 
        } 
         
        if (!color2Input.value) { 
            color2Error.textContent = 'El SEGUNDO COLOR es obligatorio'; 
            isValid = false; 
        } else { 
            color2Error.textContent = ''; 
        } 
         
        if (!color3Input.value) { 
            color3Error.textContent = 'El TERCER COLOR es obligatorio'; 
            isValid = false; 
        } else { 
            color3Error.textContent = ''; 
        } 
         
        if (isValid) { 
            updateGradient(); 
            if (event) document.getElementById('gradiente').scrollIntoView({ behavior: 'smooth' }); 
        } 
    }; 
     
    const updateGradient = () => { 
        const color1 = color1Input.value; 
        const color2 = color2Input.value; 
        const color3 = color3Input.value; 
         
        const gradientStyle = `linear-gradient(to bottom, ${color1}, ${color2}, 
${color3})`; 
         
        gradientPreview.style.background = gradientStyle; 
        gradientCode.textContent = `background: ${gradientStyle};`; 
         
        const gradientCard = document.querySelector('.gradient-card'); 
        gradientCard.style.transform = 'scale(1.02)'; 
        setTimeout(() => { 
            gradientCard.style.transform = 'scale(1)'; 
        }, 300); 
    }; 
     
    gradientForm.addEventListener('submit', validateAndUpdate); 
     
    [color1Input, color2Input, color3Input].forEach(input => { 
        input.addEventListener('input', () => { 
            if (color1Input.value && color2Input.value && color3Input.value) { 
                const gradientStyle = `linear-gradient(to bottom, ${color1Input.value}, 
${color2Input.value}, ${color3Input.value})`; 
                gradientPreview.style.background = gradientStyle; 
            } 
        }); 
    }); 
     
    updateGradient(); 
});
     