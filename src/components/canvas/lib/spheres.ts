const spheres = [
  {
    x: 50, y: 50, radius: 30, color: 'red', dx: 0, dy: 0, mass: 1
  },
  {
    x: 150, y: 150, radius: 50, color: 'blue', dx: 0, dy: -0, mass: 2
  },
  {
    x: 600, y: 400, radius: 45, color: 'yellow', dx: 0, dy: 0, mass: 1.5
  },
  {
    x: 700, y: 200, radius: 60, color: 'green', dx: 0, dy: 0, mass: 2.5
  },
  {
    x: 400, y: 350, radius: 45, color: 'darkblue', dx: 0, dy: 0, mass: 1.5
  },
];

const friction = 0.98;

const drawSphere = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

export const updateFrame = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  spheres.forEach((sphere) => {
    drawSphere(ctx, sphere.x, sphere.y, sphere.radius, sphere.color);

    sphere.dx *= friction;
    sphere.dy *= friction;

    sphere.x += sphere.dx;
    sphere.y += sphere.dy;

    if (sphere.x + sphere.radius > ctx.canvas.width || sphere.x - sphere.radius < 0) {
      sphere.dx = -sphere.dx;
    }
    if (sphere.y + sphere.radius > ctx.canvas.height || sphere.y - sphere.radius < 0) {
      sphere.dy = -sphere.dy;
    }

    spheres.forEach((other) => {
      if (other !== sphere) {
        const dx = other.x - sphere.x;
        const dy = other.y - sphere.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < other.radius + sphere.radius) {
          const nx = dx / distance;
          const ny = dy / distance;
          const dotproduct = (sphere.dx - other.dx) * nx + (sphere.dy - other.dy) * ny;
          const impulse = (2 * dotproduct) / (sphere.mass + other.mass);
          const impulseX = impulse * nx;
          const impulseY = impulse * ny;

          sphere.dx -= impulseX * other.mass;
          sphere.dy -= impulseY * other.mass;
          other.dx += impulseX * sphere.mass;
          other.dy += impulseY * sphere.mass;
        }
      }
    });
  });

  requestAnimationFrame(() => updateFrame(ctx));
};
