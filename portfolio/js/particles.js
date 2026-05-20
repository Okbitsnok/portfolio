// ── Particle System ──
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles=[];

function resize(){
  W=canvas.width=window.innerWidth;
  H=canvas.height=window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor(){
    this.x=Math.random()*W;
    this.y=Math.random()*H;
    this.r=Math.random()*1.2+.3;
    this.vx=(Math.random()-.5)*.25;
    this.vy=(Math.random()-.5)*.25;
    this.alpha=Math.random()*.4+.1;
    this.color=Math.random()<.6?'167,139,250':'249,115,22';
  }
  update(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0)this.x=W; if(this.x>W)this.x=0;
    if(this.y<0)this.y=H; if(this.y>H)this.y=0;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for(let i=0;i<80;i++) particles.push(new Particle());

function animParticles(){
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{ p.update(); p.draw(); });
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x;
      const dy=particles[i].y-particles[j].y;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<120){
        ctx.beginPath();
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(167,139,250,${(1-d/120)*.06})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animParticles);
}
animParticles();
