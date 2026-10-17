describe('Fatal: Redis CLUSTERDOWN causing tenant cache read failures Regression Test', () => {
  it('should handle request within SLA without 500 error or memory exhaustion', async () => {
    const start = Date.now();
    const response = await service.handleRequest({ timeout: 5000 });
    expect(response.status).toBe(200);
    expect(Date.now() - start).toBeLessThan(3000);
  });
});