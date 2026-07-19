import React, { useEffect, useRef } from "react";
import "./Background.scss";

const PARTICLE_COUNT = 90;
const HUE_MIN = 150;
const HUE_MAX = 190;
const SPEED_MIN = 8;
const SPEED_MAX = 26;
const BACKGROUND_COLOR = "#050b14";
const MOUSE_RADIUS = 140;
const MOUSE_FORCE = 60;
const MAX_DPR = 2;

function makeParticle(width, height) {
  const hue = HUE_MIN + Math.random() * (HUE_MAX - HUE_MIN);
  return {
    x: Math.random() * width,
    y: Math.random() * height + height * 0.2,
    r: 1 + Math.random() * 2.2,
    speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.4 + Math.random() * 0.6,
    glowColor: `hsla(${hue},80%,70%,0.9)`,
    glowColorFade: `hsla(${hue},80%,70%,0)`,
    dotColor: `hsla(${hue},90%,85%,0.95)`,
    staticDotColor: `hsla(${hue},90%,85%,0.85)`,
  };
}

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;
    let lastT = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(makeParticle(width, height));
      }
    }

    function clearCanvas() {
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, width, height);
    }

    function drawDot(p, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    function tick(dt) {
      clearCanvas();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.sway += p.swaySpeed * dt;
        let vx = Math.sin(p.sway) * 10;
        let vy = -p.speed;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force * 0.5;
          }
        }

        p.x += vx * dt;
        p.y += vy * dt;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) {
          p.x = width + 10;
        } else if (p.x > width + 10) {
          p.x = -10;
        }

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        glow.addColorStop(0, p.glowColor);
        glow.addColorStop(1, p.glowColorFade);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        drawDot(p, p.dotColor);
      }
    }

    function drawStaticFrame() {
      clearCanvas();
      for (let i = 0; i < particles.length; i++) {
        drawDot(particles[i], particles[i].staticDotColor);
      }
    }

    function loop(t) {
      const dt = Math.min((t - lastT) / 1000, 0.05) || 0;
      lastT = t;
      if (document.hidden) {
        return;
      }
      tick(dt);
      rafId = requestAnimationFrame(loop);
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function handleVisibilityChange() {
      if (!reducedMotion && !document.hidden) {
        lastT = performance.now();
        rafId = requestAnimationFrame(loop);
      }
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    initParticles();

    if (reducedMotion) {
      drawStaticFrame();
    } else {
      lastT = performance.now();
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <canvas className="background" ref={canvasRef} />
      <div className="background-scanlines" />
    </>
  );
}

export default Background;
