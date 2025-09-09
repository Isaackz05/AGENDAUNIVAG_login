function togglePassword() {
        const senha = document.getElementById('senhaInput');
        const icone = document.getElementById('toggleIcon');
        
        if (senha.type === 'password') {
            senha.type = 'text';
            icone.className = 'bi bi-eye-slash-fill toggle-password';
        } else {
            senha.type = 'password';
            icone.className = 'bi bi-eye-fill toggle-password';
        }
    }
