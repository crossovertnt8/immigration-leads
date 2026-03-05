// Immigration Leads - Notification System
// Add this to app.html to enable real-time notifications

class NotificationSystem {
    constructor() {
        this.enabled = localStorage.getItem('notifications-enabled') === 'true';
        this.sound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZijcIF2W57OihUxELTKXh8bllHAU2jdXwyXkrBSN0xPDakUELFFyx6OyrWBQLRp3e8r9vIgYrf87y2Yo3CBdlu+zooVMRC0yk4fG5ZRwFN43V8Ml5KwUidMPw2pJCCxNar+jrq1kVDEWc3vK/cCMGLH3M8tuKNwgXZbzs6KFTEQtMo+DxuWYcBTaM1PDKeisFJHPC8NqSRAsSWK7n67BdFwxEnN3ywHQkByx8y/LcizcIF2W86+mjVRILTKLf8rpnHQU2i9Lwy3wsBSRxwfDckUQLEVes5+qwXhgNQ5vb8sF1JggsesvynYwaCRZjuuvqpFkVDEyh3vK6aB4FN4nQ8Mx+LwUlcL/w3ZNGCxFVqufqsGAaDUOa2fHBeicJK3fJ8p+PGwkaYrfq66VcGAxLn93yumkfBTaI0PDNgDAGJ26+8N6URwwQU6jm6rBiGw1DmNfy - wZ4oBSt2yPKgkB0KGmC16OyoYBwMSp3c8rttIAY2h87w0IIzBilru/DfmUsNEFGl5OqyZh0OQJbU8sOBKggqdcfyo5MeChlfsOTrq2IeDEqb2/K8cSIHNoXM8NGDNQcob7rw4Z1PDRBOQ==');
        this.setupUI();
    }

    setupUI() {
        const style = document.createElement('style');
        style.textContent = `
            .notification-toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 12px;
                padding: 1rem 1.5rem;
                box-shadow: 0 8px 32px rgba(0,0,0,0.2);
                z-index: 10000;
                min-width: 300px;
                animation: slideIn 0.3s ease;
                border-left: 4px solid #10b981;
            }
            
            .notification-toast.high-score {
                border-left-color: #f59e0b;
                background: linear-gradient(135deg, #fff9e6 0%, #ffffff 100%);
            }
            
            .notification-toast.urgent {
                border-left-color: #ef4444;
                background: linear-gradient(135deg, #fee2e2 0%, #ffffff 100%);
                animation: pulse 0.5s ease infinite alternate;
            }
            
            .notification-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            
            .notification-title {
                font-weight: bold;
                color: #1e3a5f;
                font-size: 1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #64748b;
            }
            
            .notification-body {
                color: #475569;
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .notification-actions {
                margin-top: 0.75rem;
                display: flex;
                gap: 0.5rem;
            }
            
            .notification-btn {
                padding: 0.4rem 0.8rem;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.85rem;
                font-weight: 500;
            }
            
            .notification-btn.primary {
                background: #1e3a5f;
                color: white;
            }
            
            .notification-btn.secondary {
                background: #e2e8f0;
                color: #475569;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes pulse {
                from { box-shadow: 0 8px 32px rgba(239, 68, 68, 0.3); }
                to { box-shadow: 0 12px 40px rgba(239, 68, 68, 0.5); }
            }
            
            .notification-settings {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                cursor: pointer;
                font-size: 1.5rem;
                z-index: 9999;
                transition: all 0.3s;
            }
            
            .notification-settings:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(0,0,0,0.2);
            }
            
            .notification-settings.enabled {
                background: #10b981;
                color: white;
            }
            
            .notification-settings.disabled {
                background: #ef4444;
                color: white;
            }
        `;
        document.head.appendChild(style);
        
        // Add notification toggle button
        const toggle = document.createElement('div');
        toggle.className = `notification-settings ${this.enabled ? 'enabled' : 'disabled'}`;
        toggle.innerHTML = this.enabled ? '🔔' : '🔕';
        toggle.title = this.enabled ? 'Notificaciones activadas' : 'Notificaciones desactivadas';
        toggle.onclick = () => this.toggle();
        document.body.appendChild(toggle);
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('notifications-enabled', this.enabled);
        
        const toggle = document.querySelector('.notification-settings');
        toggle.className = `notification-settings ${this.enabled ? 'enabled' : 'disabled'}`;
        toggle.innerHTML = this.enabled ? '🔔' : '🔕';
        toggle.title = this.enabled ? 'Notificaciones activadas' : 'Notificaciones desactivadas';
        
        this.show({
            title: this.enabled ? '🔔 Notificaciones activadas' : '🔕 Notificaciones desactivadas',
            body: this.enabled ? 
                'Recibirás alertas de nuevos leads viables' : 
                'No recibirás más notificaciones',
            type: this.enabled ? 'success' : 'info'
        });
    }

    show(options) {
        if (!this.enabled && options.type !== 'info' && options.type !== 'success') return;
        
        const toast = document.createElement('div');
        toast.className = `notification-toast ${options.type || ''}`;
        
        toast.innerHTML = `
            <div class="notification-header">
                <div class="notification-title">${options.title}</div>
                <button class="notification-close">×</button>
            </div>
            <div class="notification-body">${options.body}</div>
            ${options.actions ? `
                <div class="notification-actions">
                    ${options.actions.map(action => 
                        `<button class="notification-btn ${action.class}" onclick="${action.onclick}">${action.label}</button>`
                    ).join('')}
                </div>
            ` : ''}
        `;
        
        document.body.appendChild(toast);
        
        // Play sound for high-priority notifications
        if ((options.type === 'high-score' || options.type === 'urgent') && this.enabled) {
            this.sound.play().catch(() => {}); // Ignore if sound fails
        }
        
        // Close button
        toast.querySelector('.notification-close').onclick = () => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        };
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
    }

    notifyNewLead(lead) {
        let type = 'info';
        let title = '📝 Nuevo Lead Registrado';
        
        if (lead.score >= 80) {
            type = 'high-score';
            title = '⭐ ¡Lead de Alta Calidad!';
        } else if (lead.urgency === 'high') {
            type = 'urgent';
            title = '⚡ Lead Urgente';
        }
        
        this.show({
            title: title,
            body: `${lead.name} (${lead.country}) - Score: ${lead.score}/100`,
            type: type,
            actions: [
                {
                    label: 'Ver Detalles',
                    class: 'primary',
                    onclick: `window.scrollTo(0, 0); document.querySelector('.lead-card').scrollIntoView({behavior: 'smooth'})`
                },
                {
                    label: 'Dashboard',
                    class: 'secondary',
                    onclick: `window.location.href='dashboard.html'`
                }
            ]
        });
    }

    notifyDailySummary(stats) {
        this.show({
            title: '📊 Resumen Diario',
            body: `Hoy: ${stats.new} nuevos leads | ${stats.viable} viables | ${stats.scheduled} citas agendadas`,
            type: 'info'
        });
    }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Export for use in app.html
if (typeof window !== 'undefined') {
    window.notificationSystem = notificationSystem;
}

// Monitor localStorage for new leads (cross-tab communication)
window.addEventListener('storage', (e) => {
    if (e.key === 'immigration-leads' && e.newValue) {
        const oldLeads = e.oldValue ? JSON.parse(e.oldValue) : [];
        const newLeads = JSON.parse(e.newValue);
        
        if (newLeads.length > oldLeads.length) {
            const latestLead = newLeads[0];
            notificationSystem.notifyNewLead(latestLead);
        }
    }
});
