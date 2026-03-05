// Demo Data for Immigration Leads System
// Run this in browser console to populate with sample data

const demoLeads = [
    {
        id: Date.now().toString() + '1',
        name: 'María González',
        email: 'maria.gonzalez@email.com',
        phone: '+34612345678',
        visaType: 'work',
        situation: 'legal',
        urgency: 'high',
        budget: 'high',
        country: 'Colombia',
        notes: 'Ingeniera de software con oferta laboral de empresa española. Urgente por comienzo de contrato en 2 meses.',
        score: 95,
        status: 'new',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '2',
        name: 'Carlos Rodríguez',
        email: 'carlos.r@email.com',
        phone: '+34623456789',
        visaType: 'investor',
        situation: 'pending',
        urgency: 'medium',
        budget: 'high',
        country: 'México',
        notes: 'Empresario que quiere establecer negocio en Madrid. Inversión >€500k.',
        score: 90,
        status: 'contacted',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '3',
        name: 'Ana Martínez',
        email: 'ana.m@email.com',
        phone: '+34634567890',
        visaType: 'family',
        situation: 'legal',
        urgency: 'high',
        budget: 'medium',
        country: 'Venezuela',
        notes: 'Reagrupación familiar. Esposo ya residente en España.',
        score: 75,
        status: 'scheduled',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '4',
        name: 'Pedro Sánchez',
        email: 'pedro.s@email.com',
        phone: '+34645678901',
        visaType: 'student',
        situation: 'pending',
        urgency: 'medium',
        budget: 'medium',
        country: 'Ecuador',
        notes: 'Estudiante de postgrado. Beca parcial en Universidad de Barcelona.',
        score: 65,
        status: 'new',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '5',
        name: 'Laura Fernández',
        email: 'laura.f@email.com',
        phone: '',
        visaType: 'work',
        situation: 'undocumented',
        urgency: 'high',
        budget: 'low',
        country: 'Perú',
        notes: 'Trabajando sin papeles. Busca regularizar situación.',
        score: 45,
        status: 'new',
        createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '6',
        name: 'Roberto Silva',
        email: 'roberto.silva@email.com',
        phone: '+34656789012',
        visaType: 'work',
        situation: 'legal',
        urgency: 'low',
        budget: 'high',
        country: 'Argentina',
        notes: 'Arquitecto. Explorando oportunidades. No es urgente.',
        score: 70,
        status: 'contacted',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '7',
        name: 'Isabel Torres',
        email: 'isabel.t@email.com',
        phone: '+34667890123',
        visaType: 'family',
        situation: 'legal',
        urgency: 'medium',
        budget: 'medium',
        country: 'Chile',
        notes: 'Reagrupación de padres. Tiene todos los documentos.',
        score: 80,
        status: 'scheduled',
        createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '8',
        name: 'Miguel Ángel Díaz',
        email: 'ma.diaz@email.com',
        phone: '+34678901234',
        visaType: 'tourist',
        situation: 'legal',
        urgency: 'low',
        budget: 'low',
        country: 'Bolivia',
        notes: 'Quiere extender visa de turista 3 meses más.',
        score: 35,
        status: 'closed',
        createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '9',
        name: 'Sofía Ramírez',
        email: 'sofia.r@email.com',
        phone: '+34689012345',
        visaType: 'investor',
        situation: 'pending',
        urgency: 'high',
        budget: 'high',
        country: 'Brasil',
        notes: 'Golden Visa. Compra de propiedad >€500k. Cierre en 1 mes.',
        score: 100,
        status: 'new',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '10',
        name: 'Andrés Morales',
        email: 'andres.m@email.com',
        phone: '',
        visaType: 'other',
        situation: 'deportation',
        urgency: 'high',
        budget: 'low',
        country: 'El Salvador',
        notes: 'Proceso de deportación activo. Situación crítica.',
        score: 50,
        status: 'new',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '11',
        name: 'Carmen López',
        email: 'carmen.lopez@email.com',
        phone: '+34690123456',
        visaType: 'student',
        situation: 'legal',
        urgency: 'low',
        budget: 'medium',
        country: 'Paraguay',
        notes: 'Estudiante de idiomas. Renovación de NIE.',
        score: 55,
        status: 'contacted',
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: Date.now().toString() + '12',
        name: 'David Herrera',
        email: 'david.h@email.com',
        phone: '+34601234567',
        visaType: 'work',
        situation: 'pending',
        urgency: 'medium',
        budget: 'high',
        country: 'Uruguay',
        notes: 'Transferencia interna de empresa multinacional.',
        score: 85,
        status: 'scheduled',
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString()
    }
];

// Function to load demo data
function loadDemoData() {
    localStorage.setItem('immigration-leads', JSON.stringify(demoLeads));
    console.log('✅ Demo data loaded successfully!');
    console.log(`📊 ${demoLeads.length} leads added to the system`);
    console.log('🔄 Refresh the page to see the data');
    
    // Show summary
    const viable = demoLeads.filter(l => l.score >= 50).length;
    const scheduled = demoLeads.filter(l => l.status === 'scheduled').length;
    const highScore = demoLeads.filter(l => l.score >= 70).length;
    
    console.log(`\n📈 Summary:`);
    console.log(`   • Viable leads: ${viable}/${demoLeads.length}`);
    console.log(`   • Scheduled: ${scheduled}`);
    console.log(`   • High score (70+): ${highScore}`);
}

// Function to clear data
function clearDemoData() {
    localStorage.removeItem('immigration-leads');
    console.log('🗑️ All leads cleared');
    console.log('🔄 Refresh the page');
}

// Auto-load instructions
console.log('%c🎬 Immigration Leads - Demo Data', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('\n📝 Available commands:');
console.log('   • loadDemoData()  - Load 12 sample leads');
console.log('   • clearDemoData() - Clear all leads');
console.log('\n💡 Tip: Type loadDemoData() to start');
