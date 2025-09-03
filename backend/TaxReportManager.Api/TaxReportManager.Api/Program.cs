//using Microsoft.EntityFrameworkCore;
//using TaxRecordManager.Api.Models;
//using TaxRecordManager.Api.Data;

//var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.
//builder.Services.AddControllers();

//// Configure Swagger
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//// Configure in-memory database
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseInMemoryDatabase("TaxRecordDb"));

//// Enable CORS
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAllOrigins", builder =>
//        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
//});

//var app = builder.Build();

//// Enable Swagger UI
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();
//app.UseAuthorization();

//// after app = builder.Build();
//app.UseHttpsRedirection();

//// apply your named CORS policy BEFORE MapControllers
//app.UseCors("AllowAllOrigins");

//app.UseAuthorization();
//app.MapControllers();
//app.Run();


//// Map controllers
//app.MapControllers();

//app.Run();
using Microsoft.EntityFrameworkCore;
using TaxRecordManager.Api.Models;
using TaxRecordManager.Api.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// In-memory EF
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase("TaxRecordDb"));

// CORS (CORS method; Angular calls the API directly)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// Swagger UI in dev
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// apply CORS BEFORE MapControllers
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();



