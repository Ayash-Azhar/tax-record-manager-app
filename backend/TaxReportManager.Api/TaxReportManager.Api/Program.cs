using Microsoft.EntityFrameworkCore;
using TaxRecordManager.Api.Models;
using TaxRecordManager.Api.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure in-memory database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase("TaxRecordDb"));

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

// Enable Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// after app = builder.Build();
app.UseHttpsRedirection();

// apply your named CORS policy BEFORE MapControllers
app.UseCors("AllowAllOrigins");

app.UseAuthorization();
app.MapControllers();
app.Run();


// Map controllers
app.MapControllers();

app.Run();
