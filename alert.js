 (function(global) {
            // Inject Font Awesome CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
            document.head.appendChild(link);

            // Create alert function
            function createAlert(options) {
                const defaults = {
                    title: "Alert",
                    buttonText: "OK",
                    type: "success",
                    width: "auto",
                    height: "auto",
                    textWidth: "100%",
                    textHeight: "auto",
                    buttonWidth: "auto",
                    buttonHeight: "auto"
                };

                const settings = { ...defaults, ...options };

                const container = document.createElement('div');
                container.className = `alert-container ${settings.type}`;
                container.style.width = settings.width;
                container.style.height = settings.height;

                const iconElement = document.createElement('div');
                iconElement.className = 'alert-icon';
                switch (settings.type) {
                    case 'success':
                        iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
                        break;
                    case 'warning':
                        iconElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
                        break;
                    case 'error':
                        iconElement.innerHTML = '<i class="fas fa-times-circle"></i>';
                        break;
                    default:
                        iconElement.innerHTML = '<i class="fas fa-info-circle"></i>';
                        break;
                }
                container.appendChild(iconElement);

                const title = document.createElement('div');
                title.textContent = settings.title;
                title.className = 'alert-title';
                title.style.width = settings.textWidth;
                title.style.height = settings.textHeight;
                container.appendChild(title);

                const button = document.createElement('button');
                button.textContent = settings.buttonText;
                button.className = `alert-button ${settings.type}`;
                button.style.width = settings.buttonWidth;
                button.style.height = settings.buttonHeight;
                button.addEventListener('click', function() {
                    document.body.removeChild(container);
                });
                container.appendChild(button);

                document.body.appendChild(container);
            }

            global.Alertjs = {
                create: createAlert
            };
        })(this);